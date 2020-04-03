const supplierResolvers = {
  Supplier: {
    address: async (parent, args, context, info) => {
      const { getAddressById } = context;
      const address = await getAddressById(parent.address);
      return address;
    },
  },

  Query: {
    supplier: async (parent, { id }, context, info) => {
      const { getSupplierById } = context;
      return await getSupplierById(id);
    },
    allSuppliers: async (parent, args, context, info) => {
      const { getAllSuppliers } = context;
      return await getAllSuppliers();
    },
  },
  Mutation: {
    createSupplier: async (parent, { supplier }, context, info) => {
      const { createSupplier } = context;
      return await createSupplier(supplier);
    },
    updateSupplier: async (
      parent,
      { supplier },
      { updateSupplierById },
      info,
    ) => {
      return await updateSupplierById(supplier);
    },
    deleteSupplier: async (parent, { id }, context, info) => {
      const { deleteSupplierById } = context;
      return await deleteSupplierById(id);
    },
  },
};

export default supplierResolvers;
