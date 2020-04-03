// import { IDBModel } from '../../commons/types';
// import { google } from 'googleapis';
// import { sheeez } from 'gsheeez';

// import itemSheet from '../gs-models/Item-gs';
// import purchaseOrderSheet from '../gs-models/PurchaseOrder-gs';
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

// const purchaseordersSheet = gshez.create({
//   spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
//   range: 'PurchaseOrder!A:I',
// });

// const supplierStatusesSheet = gshez.create({
//   spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
//   range: 'SupplierStatus!A:C',
// });

// const scheduleLinesSheet = gshez.create({
//   spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
//   range: 'ScheduleLine!A:F',
// });
// const purchaseOrderGs: IDBModel<any> = {
//   insert: async user => {},

//   getById: async data => {
//     const grid = await purchaseordersSheet.grid({ headerLength: 1 });
//     purchaseOrderSheet.setGrid(grid);
//     const purchaseorder: Array<any> = purchaseOrderSheet
//       .getAll()
//       .map((po, idx) => {
//         return {
//           id: idx,
//           purchaseOrderNo: po.purchaseOrderNo,
//           shipmentNo: po.shipmentNo,
//           adminStatus: po.adminStatus,
//           supplierStatusHeader: po.supplierStatusHeader,
//           documentDate: po.documentDate,
//           postingDate: po.postingate,
//           vendorAddress: po.vendorAddress,
//           supplier: po.supplier,
//           items: po.items,
//         };
//       });
//     return purchaseorder[data];
//   },

//   getAll: async () => {
//     const grid = await purchaseordersSheet.grid({ headerLength: 1 });
//     purchaseOrderSheet.setGrid(grid);
//     return purchaseOrderSheet.getAll().map((po, idx) => {
//       return {
//         id: idx,
//         purchaseOrderNo: po.purchaseOrderNo,
//         shipmentNo: po.shipmentNo,
//         adminStatus: po.adminStatus,
//         supplierStatusHeader: po.supplierStatusHeader,
//         documentDate: po.documentDate,
//         postingDate: po.postingate,
//         vendorAddress: po.vendorAddress,
//         supplier: po.supplier,
//         items: po.items,
//       };
//     });
//   },

//   deleteById: async data => {},

//   updateById: async data => {},

//   getAllByItem: async id => {
//     const res = id.split(',');
//     const grid = await itemsSheet.grid({ headerLength: 1 });
//     itemSheet.setGrid(grid);
//     const itemzxc: Array<any> = itemSheet.getAll().map((itemz, idx) => {
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

//     return res.map(i => {
//       const idx = parseInt(i);
//       return itemzxc[idx];
//     });
//   },
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

// export { purchaseOrderGs };
