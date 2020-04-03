// import { IDBModel } from '../../commons/types';
// import { google } from 'googleapis';
// import { sheeez } from 'gsheeez';

// import itemSheet from '../gs-models/Item-gs';
// import scheduleLineSheet from '../gs-models/ScheduleLine-gs';
// import supplierStatusSheet from '../gs-models/SupplierStatus-gs';

// const gshez = sheeez({
//   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//   token_path: 'token.json',
//   creds_path: 'credentials.json',
//   google,
// });

// const itemsSheet = gshez.create({
//   spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
//   range: 'Item!A:N',
// });

// const supplierStatusesSheet = gshez.create({
//   spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
//   range: 'SupplierStatus!A:C',
// });

// const scheduleLinesSheet = gshez.create({
//   spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
//   range: 'ScheduleLine!A:F',
// });
// const itemGs: IDBModel<any> = {
//   insert: async user => {},

//   getById: async data => {
//     const grid = await itemsSheet.grid({ headerLength: 1 });
//     itemSheet.setGrid(grid);
//     const item: Array<any> = itemSheet.getAll().map((itemz, idx) => {
//       return {
//         id: idx,
//         itemNo: itemz.itemNo,
//         productId: itemz.productId,
//         description: itemz.description,
//         quantity: itemz.quantity,
//         uom: itemz.uom,
//         unitPrice: itemz.unitPrice,
//         totalAmount: itemz.totalAmount,
//         discount: itemz.discount,
//         deliveryAddress: itemz.deliveryAddress,
//         supplierStatusItem: itemz.supplierStatusItem,
//         scheduleLine: itemz.scheduleLine,
//         currency: itemz.currency,
//         dateUpdated: itemz.dateUpdated,
//         timeUpdated: itemz.timeUpdated,
//       };
//     });
//     return item[data];
//   },

//   getAll: async () => {
//     const grid = await itemsSheet.grid({ headerLength: 1 });
//     itemSheet.setGrid(grid);
//     return itemSheet.getAll().map((itemz, idx) => {
//       return {
//         id: idx,
//         itemNo: itemz.itemNo,
//         productId: itemz.productId,
//         description: itemz.description,
//         quantity: itemz.quantity,
//         uom: itemz.uom,
//         unitPrice: itemz.unitPrice,
//         totalAmount: itemz.totalAmount,
//         discount: itemz.discount,
//         deliveryAddress: itemz.deliveryAddress,
//         supplierStatusItem: itemz.supplierStatusItem,
//         scheduleLine: itemz.scheduleLine,
//         currency: itemz.currency,
//         dateUpdated: itemz.dateUpdated,
//         timeUpdated: itemz.timeUpdated,
//       };
//     });
//   },

//   deleteById: async data => {},

//   updateById: async data => {},

//   getAllByItem: async id => {},
//   getAllBySupplierStatus: async id => {
//     const res = id.split(',');
//     const grid = await supplierStatusesSheet.grid({ headerLength: 1 });
//     supplierStatusSheet.setGrid(grid);
//     const supplierStatus: Array<any> = supplierStatusSheet
//       .getAll()
//       .map((ss, idx) => {
//         return {
//           id: idx,
//           status: ss.status,
//           timeCreated: ss.timeCreated,
//           dateCreated: ss.dateCreated,
//         };
//       });

//     return res.map(i => {
//       const idx = parseInt(i);
//       return supplierStatus[idx];
//     });
//   },
//   getAllByScheduleLine: async data => {
//     const res = data.split(',');
//     const grid = await scheduleLinesSheet.grid({ headerLength: 1 });
//     scheduleLineSheet.setGrid(grid);
//     const ssl: Array<any> = scheduleLineSheet.getAll().map((sl, idx) => {
//       return {
//         id: idx,
//         quantity: sl.quantity,
//         uom: sl.uom,
//         unitPrice: sl.unitPrice,
//         totalAmount: sl.totalAmount,
//         deliveryDateAndTime: sl.deliveryDateAndTime,
//         deliveryStatus: sl.deliveryStatus,
//       };
//     });
//     console.log(scheduleLineSheet.getAll());
//     return res.map(i => {
//       const idx = parseInt(i);
//       return ssl[idx];
//     });
//   },
//   updateSupplierStatusItemById: async id => {},
//   updateAdminStatusPurchaseOrderById: async id => {},
// };

// export { itemGs };
