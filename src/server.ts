require('dotenv').config();

import { ApolloServer } from 'apollo-server-express';

import mongoose from 'mongoose';
import express from 'express';

import { resolvers, typeDefs } from './graphql';
import bodyParser from 'body-parser';
import serveIndex from 'serve-index';

import { sheep } from 'gsheeez';
import { google } from 'googleapis';

import {
  //Mongo
  userModel,
  addressModel,
  supplierModel,
  supplierStatusModel,
  itemModel,
  purchaseOrderModel,
  scheduleLineModel,
  //GSheet
  // userGs,
  addressGs,
  // supplierStatusGs,
  // supplierGs,
  // itemGs,
  // scheduleLineGs,
  // purchaseOrderGs,
} from './models';

import * as controllers from './controllers';

// //Database
// mongoose.set('useFindAndModify', false);
// const { mongoURI: db } = process.env;
// const { PORT } = process.env;

// mongoose
//   .connect(db || '', {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//   })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const {
  getAllDataDB,
  getByIDDB,
  DeleteRecordByIDDB,
  getAllByItemDB,
  getAllBySupplierStatusDB,
  getAllByScheduleLineDB,
  //User controllers
  createCreateUserDB,
  updateUserByIDDB,
  //Supplier controllers
  createCreateSupplierDB,
  updateSupplierByIDDB,
  //SupplierStatus
  createCreateSupplierStatusDB,
  updateSupplierStatusByIDDB,
  //Item
  createCreateItemDB,
  updateItemByIDDB,
  updateSupplierStatusItemByIDDB,
  //Purchase Order
  createCreatePurchaseOrderDB,
  updatePurchaseOrderByIDDB,
  updateAdminStatusByIDDB,
  //Schedule Line
  createCreateScheduleLineDB,
  updateScheduleLineByIDDB,
} = controllers;

const context = async session => {
  return {
    //User
    createUser: createCreateUserDB(userModel),
    // getAllUsers: getAllDataDB(userGs),
    // getUserById: getByIDDB(userGs),
    updateUserById: updateUserByIDDB(userModel),
    deleteUserById: DeleteRecordByIDDB(userModel),
    //Adress
    getAddressById: getByIDDB(addressGs),
    getAllAddress: getAllDataDB(addressGs),
    //Supplier
    createSupplier: createCreateSupplierDB(supplierModel),
    // getAllSuppliers: getAllDataDB(supplierGs),
    // getSupplierById: getByIDDB(supplierGs),
    deleteSupplierById: DeleteRecordByIDDB(supplierModel),
    updateSupplierById: updateSupplierByIDDB(supplierModel),
    //SupplierStatus
    createSupplierStatus: createCreateSupplierStatusDB(supplierStatusModel),
    updateSupplierStatusById: updateSupplierStatusByIDDB(supplierStatusModel),
    deleteSupplierStatusById: DeleteRecordByIDDB(supplierStatusModel),
    // getSupplierStatusById: getByIDDB(supplierStatusGs),
    // getAllSupplierStatus: getAllDataDB(supplierStatusGs),
    //Item
    createItem: createCreateItemDB(itemModel),
    updateItemById: updateItemByIDDB(itemModel),
    updateSupplierStatusItemById: updateSupplierStatusItemByIDDB(itemModel),
    deleteItemById: DeleteRecordByIDDB(itemModel),
    // getItemById: getByIDDB(itemGs),
    // getAllItems: getAllDataDB(itemGs),
    // getAllSupplierStatusByItem: getAllBySupplierStatusDB(itemGs),
    // getAllScheduleLinesByItem: getAllByScheduleLineDB(itemGs),
    //Purchase Order
    createPurchaseOrder: createCreatePurchaseOrderDB(purchaseOrderModel),
    updatePurchaseOrderById: updatePurchaseOrderByIDDB(purchaseOrderModel),
    deletePurchaseOrderbyId: DeleteRecordByIDDB(purchaseOrderModel),
    // getPurchaseOrderById: getByIDDB(purchaseOrderGs),
    // getAllPurchaseOrders: getAllDataDB(purchaseOrderGs),
    // getAllSupplierStatusByPurchaseOrder: getAllBySupplierStatusDB(
    //   purchaseOrderGs,
    // ),
    updateAdminStatusById: updateAdminStatusByIDDB(purchaseOrderModel),
    // getAllItemsByPurchaseOrder: getAllByItemDB(purchaseOrderGs),
    //Schedule Line
    createScheduleLine: createCreateScheduleLineDB(scheduleLineModel),
    updateScheduleLine: updateScheduleLineByIDDB(scheduleLineModel),
    deleteScheduleLineById: DeleteRecordByIDDB(scheduleLineModel),
    // getScheduleLineById: getByIDDB(scheduleLineGs),
    // getAllScheduleLines: getAllDataDB(scheduleLineGs),
    // getAllSupplierStatusByScheduleLine: getAllBySupplierStatusDB(
    //   scheduleLineGs,
    // ),
  };
};

// sheep.configure({
//   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//   token_path: 'token.json',
//   creds_path: 'credentials.json',
//   google,
// });

//Gsheet Server
const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });

  server.applyMiddleware({ app });

  // await mongoose.connect('mongodb://localhost:27017/test3', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀  Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
};

startServer();

// await mongoose.connect('mongodb://localhost:27017/test3', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Mongo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context,
// });

// const app = express();

// app.use(bodyParser.json({ limit: '10mb' }));
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
// app.use(
//   '/images',
//   express.static('./public/images'),
//   serveIndex('public/images', { icons: true }),
// );
// server.applyMiddleware({ app });
// // The `listen` method launches a web server.
// const _port = PORT || 4000;
// app.listen(_port, () => {
//   console.log(`🚀  Server ready at http:  //localhost:${_port}/`);
// });
