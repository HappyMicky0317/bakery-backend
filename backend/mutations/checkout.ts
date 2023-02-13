import { KeystoneContext } from '@keystone-next/types';
import {
  CartItemCreateInput,
  OrderCreateInput,
} from '../.keystone/schema-types';
import stripeConfig from '../lib/stripe';

const graphql = String.raw;

interface Arguments {
  token: string;
}

async function checkout(
  root: any,

  { token }: Arguments,

  context: KeystoneContext
): Promise<OrderCreateInput> {
  //1. Make sure user is signed in
  const userId = context.session.itemId;
  if (!userId) {
    throw new Error('Sorry! You must be signed in to create an order!');
  }
  //Query the current user
  const user = await context.lists.User.findOne({
    where: { id: userId },
    resolveFields: graphql`
    id
    name
    email
    cart {
      id
      quantity
      product {
        name
        price
        description
        id
        photo {
          id
          image {
            id
            publicUrlTransformed
          }
        }
      }
    }
    `,
  });
  console.dir(user, { depth: null });
  //2. calculate the total price for their order
  const cartItems = user.cart.filter((cartItem) => cartItem.product);
  const amount = cartItems.reduce(function (
    total: number,
    cartItem: CartItemCreateInput
  ) {
    return total + cartItem.quantity * cartItem.product.price;
  },
  0);
  console.log(amount);
  //3. create charge with stripe library
  const charge = await stripeConfig.paymentIntents
    .create({
      amount,
      currency: 'USD',
      confirm: true,
      payment_method: token,
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err.message);
    });
  // console.log(charge);
  //4. conveert the cartItems to orderItems
  const orderItems = cartItems.map((item) => {
    const orderItem = {
      name: item.product.name,
      description: item.product.description,
      price: item.product.price,
      quantity: cartItems.quantity,
      photo: { connect: { id: item.product.photo.id } },
    };
    return orderItem;
  });
  //5. create the order and return it
  const order = await context.lists.Order.createOne({
    data: {
      total: charge.amount,
      charge: charge.id,
      items: {
        create: orderItems,
      },
      user: { connect: { id: userId } },
    },
  });
  //6. clean up any old cart item
  const cartItemIds = user.cart.map((cartItem) => cartItem.id);
  await context.lists.CartItem.deleteMany({
    ids: cartItemIds,
  });
  return order;
}
export default checkout;
