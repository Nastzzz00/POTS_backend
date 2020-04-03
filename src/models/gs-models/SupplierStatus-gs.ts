import { createSchema, createModel } from 'gsheeez';

const SupplierStatusSchema = new createSchema({
  range: 'A:C',
  header: ['status', 'dateCreated', 'timeCreated'],
});

export default createModel(SupplierStatusSchema);
