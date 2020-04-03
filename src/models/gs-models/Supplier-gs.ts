import { createSchema, createModel } from 'gsheeez';

const Supplierschema = new createSchema({
  range: 'A:F',
  header: [
    'supplierNo',
    'supplierName',
    'tin',
    'contactNumber',
    'contactPerson',
    'address',
  ],
});

export default createModel(Supplierschema);
