import { createSchema, createModel } from 'gsheeez';

const AddressSchema = new createSchema({
  range: 'A:E',
  header: ['building_name', 'street', 'city', 'state', 'zip_code'],
});

export default createModel(AddressSchema);
