// import { IDBModel } from '../../commons/types';
// import { google } from 'googleapis';
// import { sheeez } from 'gsheeez';

// import supplierSheet from '../gs-models/Supplier-gs';

// const gshez = sheeez({
//   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//   token_path: 'token.json',
//   creds_path: 'credentials.json',
//   google,
// });

// const suppliersSheet = gshez.create({
//   spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
//   range: 'Supplier!A:F',
// });

// const supplierGs: IDBModel<any> = {
//   insert: async user => {},

//   getById: async data => {
//     const grid = await suppliersSheet.grid({ headerLength: 1 });
//     supplierSheet.setGrid(grid);
//     const supplier: Array<any> = supplierSheet.getAll().map((supp, idx) => {
//       return {
//         id: idx,
//         supplierNo: supp.supplierNo,
//         supplierName: supp.supplierName,
//         tin: supp.tin,
//         contactPerson: supp.contactPerson,
//         contactNumber: supp.contactNumber,
//         address: supp.address,
//       };
//     });
//     return supplier[data];
//   },

//   getAll: async () => {
//     const grid = await suppliersSheet.grid({ headerLength: 1 });
//     supplierSheet.setGrid(grid);
//     return supplierSheet.getAll().map((supp, idx) => {
//       return {
//         id: idx,
//         supplierNo: supp.supplierNo,
//         supplierName: supp.supplierName,
//         tin: supp.tin,
//         contactPerson: supp.contactPerson,
//         contactNumber: supp.contactNumber,
//         address: supp.address,
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

// export { supplierGs };
