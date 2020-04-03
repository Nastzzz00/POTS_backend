import { mergeTypes } from 'merge-graphql-schemas';

import user from './user';
import address from './address';
import supplier from './supplier';
import supplierStatus from './supplierStatus';
import item from './item';
import purchaseOrder from './purchaseOrder';
import scheduleLine from './scheduleLine';
import message from './message';

const typeDefs = [
  user,
  address,
  supplier,
  supplierStatus,
  item,
  purchaseOrder,
  scheduleLine,
  message,
];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
export default mergeTypes(typeDefs, { all: true });
