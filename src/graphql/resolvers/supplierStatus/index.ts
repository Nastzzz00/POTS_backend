import { updateSupplierStatusItemByIDDB } from '../../../controllers/update-supplierStatusItem-db';

const supplierSupplierResolvers = {
  Query: {
    supplierStatus: async (parent, { id }, { getSupplierStatusById }, info) => {
      return getSupplierStatusById(id);
    },

    allSupplierStatus: async (parent, args, { getAllSupplierStatus }, info) => {
      return getAllSupplierStatus();
    },
  },
  Mutation: {
    createSupplierStatus: async (
      _,
      { supplierStatus },
      { createSupplierStatus },
    ) => {
      return createSupplierStatus(supplierStatus);
    },

    updateSupplierStatus: async (
      parent,
      { supplierStatus },
      { updateSupplierStatusById },
      info,
    ) => {
      return updateSupplierStatusById(supplierStatus);
    },
    deleteSupplierStatus: async (
      parent,
      { id },
      { deleteSupplierStatusById },
      info,
    ) => {
      return deleteSupplierStatusById(id);
    },
  },
};

export default supplierSupplierResolvers;
