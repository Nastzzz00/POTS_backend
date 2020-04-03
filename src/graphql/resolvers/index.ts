import { mergeResolvers } from 'merge-graphql-schemas';
import { IResolvers } from 'graphql-tools';

import user from './user';
import address from './address';
import supplier from './supplier';
import supplierStatus from './supplierStatus';
import item from './item';
import purchaseOrder from './purchaseOrder';
import scheduleLine from './scheduleLine';
import message from './message';
const resolvers: IResolvers[] = [
  user,
  address,
  supplier,
  supplierStatus,
  item,
  purchaseOrder,
  scheduleLine,
  message,
];

export default mergeResolvers(resolvers);
