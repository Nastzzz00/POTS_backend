// import { IDBModel } from '../../commons/types';
// import { google } from 'googleapis';
// import { sheeez } from 'gsheeez';

// import supplierStatusSheet from '../gs-models/SupplierStatus-gs';

// const gshez = sheeez({
//   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//   token_path: 'token.json',
//   creds_path: 'credentials.json',
//   google,
// });

// const supplierStatusesSheet = gshez.create({
//   spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
//   range: 'SupplierStatus!A:C',
// });

// const supplierStatusGs: IDBModel<any> = {
//   insert: async user => {},

//   getById: async data => {
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
//     return supplierStatus[data];
//   },

//   getAll: async () => {
//     const grid = await supplierStatusesSheet.grid({ headerLength: 1 });
//     supplierStatusSheet.setGrid(grid);
//     return supplierStatusSheet.getAll().map((ss, idx) => {
//       return {
//         id: idx,
//         status: ss.status,
//         timeCreated: ss.timeCreated,
//         dateCreated: ss.dateCreated,
//       };
//     });
//   },

//   deleteById: async data => {},

//   updateById: async data => {},

//   getAllByItem: async id => {},
//   getAllBySupplierStatus: async id => {},
//   getAllByScheduleLine: async data => {},
//   updateSupplierStatusItemById: async id => {},
//   updateAdminStatusPurchaseOrderById: async id => {},
// };

// export { supplierStatusGs };
