import {
  createSchema,
  createModel,
  createModelsFromBaseModel,
  sheep,
} from 'gsheeez';

import { MD5 } from 'crypto-js';

import { google } from 'googleapis';

export const gsModels = async () => {
  sheep.configure({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    tokenPath: 'token.json',
    credsPath: 'credentials.json',
    google,
    hashFn: obj => {
      return MD5(obj).toString();
    },
  });

  const gsheet = sheep.create({
    spreadsheetId: '1wwl1dVcgZsAl7WmZJdQtlkU563G2GrlvQr8KNCsIvQ0',
    range: 'PurchaseOrder!A:AL',
  });

  const baseSchema = new createSchema({
    range: 'A:AL',
    header: [
      'purchaseOrderNo',
      'shipmentNo',
      'adminStatus',
      'supplierStatusHeader',
      'documentDate',
      'postingDate',
      'vendorAddress',
      'supplier',
      'items',
      'itemNo',
      'productId',
      'description',
      'quantity',
      'uom',
      'unitPrice',
      'totalAmount',
      'discount',
      'deliveryAddress',
      'supplierStatusItem',
      'scheduleLine',
      'currency',
      'dateUpdated',
      'timeUpdated',
      'quantity',
      'uom',
      'unitPrice',
      'totalAmount',
      'deliveryDate',
      'deliveryStatus',
      'status',
      'dateCreated',
      'timeCreated',
      'supplierNo',
      'supplierName',
      'address',
      'tin',
      'contactNumber',
      'contactPerson',
    ],
  });

  const baseModel = createModel(baseSchema);
  const grid = await gsheet.grid({ headerLength: 1 });
  console.log('GURIDO', grid);
  baseModel.setGrid(grid);

  const schemas = [
    //Purchase Order
    new createSchema({
      range: 'A:I',
      header: [
        'purchaseOrderNo',
        'shipmentNo',
        'adminStatus',
        'supplierStatusHeader',
        'documentDate',
        'postingDate',
        'vendorAddress',
        'supplier',
        'items',
      ],
      keys: ['purchaseOrderNo'],
    }),

    //vendorAddress
    new createSchema({
      range: 'A:G',
      header: [
        'purchaseOrderNo',
        'shipmentNo',
        'adminStatus',
        'supplierStatusHeader',
        'documentDate',
        'postingDate',
        'vendorAddress',
      ],
      keys: ['vendorAddress'],
    }),

    //Item
    new createSchema({
      range: 'A:V',
      header: [
        'purchaseOrderNo',
        'shipmentNo',
        'adminStatus',
        'supplierStatusHeader',
        'documentDate',
        'postingDate',
        'vendorAddress',
        'supplier',
        'items',
        'itemNo',
        'productId',
        'description',
        'quantity',
        'uom',
        'unitPrice',
        'totalAmount',
        'discount',
        'deliveryAddress',
        'supplierStatusItem',
        'scheduleLine',
        'currency',
        'dateUpdated',
        'timeUpdated',
      ],
      keys: ['itemNo', 'productId'],
    }),

    //Schedule Line
    new createSchema({
      range: 'A:AC',
      header: [
        'purchaseOrderNo',
        'shipmentNo',
        'adminStatus',
        'supplierStatusHeader',
        'documentDate',
        'postingDate',
        'vendorAddress',
        'supplier',
        'items',
        'itemNo',
        'productId',
        'description',
        'quantity',
        'uom',
        'unitPrice',
        'totalAmount',
        'discount',
        'deliveryAddress',
        'supplierStatusItem',
        'scheduleLine',
        'currency',
        'dateUpdated',
        'timeUpdated',
        'quantity',
        'uom',
        'unitPrice',
        'totalAmount',
        'deliveryDate',
        'deliveryStatus',
      ],
      keys: ['totalAmount'],
    }),

    //Supplier Status
    new createSchema({
      range: 'A:AF',
      header: [
        'purchaseOrderNo',
        'shipmentNo',
        'adminStatus',
        'supplierStatusHeader',
        'documentDate',
        'postingDate',
        'vendorAddress',
        'supplier',
        'items',
        'itemNo',
        'productId',
        'description',
        'quantity',
        'uom',
        'unitPrice',
        'totalAmount',
        'discount',
        'deliveryAddress',
        'supplierStatusItem',
        'scheduleLine',
        'currency',
        'dateUpdated',
        'timeUpdated',
        'quantity',
        'uom',
        'unitPrice',
        'totalAmount',
        'deliveryDate',
        'deliveryStatus',
        'status',
        'dateCreated',
        'timeCreated',
      ],
      keys: ['status'],
    }),

    //Supplier
    new createSchema({
      range: 'A:AL',
      header: [
        'purchaseOrderNo',
        'shipmentNo',
        'adminStatus',
        'supplierStatusHeader',
        'documentDate',
        'postingDate',
        'vendorAddress',
        'supplier',
        'items',
        'itemNo',
        'productId',
        'description',
        'quantity',
        'uom',
        'unitPrice',
        'totalAmount',
        'discount',
        'deliveryAddress',
        'supplierStatusItem',
        'scheduleLine',
        'currency',
        'dateUpdated',
        'timeUpdated',
        'quantity',
        'uom',
        'unitPrice',
        'totalAmount',
        'deliveryDate',
        'deliveryStatus',
        'status',
        'dateCreated',
        'timeCreated',
        'supplierNo',
        'supplierName',
        'address',
        'tin',
        'contactNumber',
        'contactPerson',
      ],
      keys: ['supplierNo', 'supplierName'],
    }),
  ];

  const models = createModelsFromBaseModel(schemas, baseModel);

  const [
    purchaseOrder,
    vendorAddress,
    item,
    scheduleLine,
    supplierStatus,
    supplier,
  ] = models;

  return {
    purchaseOrder,
    vendorAddress,
    item,
    scheduleLine,
    supplierStatus,
    supplier,
  };
};
