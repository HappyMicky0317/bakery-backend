import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { User } from './schemas/User';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { CartItem } from './schemas/CartItem';
import { extendGraphqlSchema } from './mutations';
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';
import { Role } from './schemas/Role';
import { permissionsList } from './schemas/fields';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/bakery-sql';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, //How long user stays signed in
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    //todo: add in intial roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      //send the email
      // console.log('This is args:', args);
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        console.log('Connected to the database!');
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      //schema goes here
      User: User,
      Product: Product,
      ProductImage: ProductImage,
      CartItem: CartItem,
      OrderItem: OrderItem,
      Order: Order,
      Role: Role,
    }),
    //Custom mutation
    extendGraphqlSchema,
    ui: {
      //Show the UI only for people who pass this test
      isAccessAllowed: ({ session }) => {
        // console.log(session);
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      //GraphQL Query
      User: `id name email role {${permissionsList.join(' ')}}`,
    }),
  })
);
