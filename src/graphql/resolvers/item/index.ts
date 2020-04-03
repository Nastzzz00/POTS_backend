const itemResolvers = {
  Item: {
    deliveryAddress: async (parent, args, context, info) => {
      const { getAddressById } = context;
      return await getAddressById(parent.deliveryAddress);
    },
    scheduleLine: async (parent, args, context, info) => {
      const { getAllScheduleLinesByItem } = context;

      return (await getAllScheduleLinesByItem(parent.scheduleLine)) || null;
    },
  },
  Query: {
    item: async (parent, { id }, { getItemById }, info) => {
      return getItemById(id);
    },

    allItems: async (parent, args, { getAllItems }, info) => {
      return getAllItems();
    },
  },
  Mutation: {
    createItem: async (parent, { item }, context, info) => {
      const { createItem, createScheduleLine, createSupplierStatus } = context;

      const scheduleLine: Array<any> = await Promise.all(
        item.scheduleLine.map(async sl => {
          let deliveryStatus;
          if (sl.deliveryStatus) {
            deliveryStatus = await Promise.all(
              sl.deliveryStatus.map(async ds => {
                const deliveryStatus = await createSupplierStatus(ds);
                return deliveryStatus.id.toString();
              }),
            );
          }
          const scheduleLine = {
            quantity: sl.quantity,
            uom: sl.uom,
            unitPrice: sl.unitPrice,
            totalAmount: sl.totalAmount,
            deliveryDateAndTime: sl.deliveryDateAndTime,
            deliveryStatus: deliveryStatus ? deliveryStatus : null,
          };
          const itemSl = await createScheduleLine(scheduleLine);
          return itemSl.id.toString();
        }),
      );

      const i = {
        itemNo: item.itemNo,
        productId: item.productId,
        description: item.description,
        quantity: item.quantity,
        uom: item.uom,
        unitPrice: item.unitPrice,
        totalAmount: item.totalAmount,
        discount: item.discount,
        deliveryAddress: item.deliveryAddress,
        supplierStatusItem: item.supplierStatusItem,
        scheduleLine: scheduleLine,
        currency: item.currency,
        dateUpdated: item.dateUpdated,
        timeUpdated: item.timeUpdated,
      };

      return await createItem(i);
    },

    updateItem: async (parent, { item }, context, info) => {
      const {
        updateItemById,
        createScheduleLine,
        createSupplierStatus,
      } = context;

      // const scheduleLine: Array<any> = await Promise.all(
      // 	item.scheduleLine.map(async sl => {
      // 		let deliveryStatus;
      // 		if (sl.deliveryStatus) {
      // 			deliveryStatus = await createSupplierStatus(sl.deliveryStatus);
      // 		}

      // 		const scheduleLine = {
      // 			quantity: sl.quantity,
      // 			uom: sl.uom,
      // 			unitPrice: sl.unitPrice,
      // 			totalAmount: sl.totalAmount,
      // 			deliveryDateAndTime: sl.deliveryDateAndTime,
      // 			deliveryStatus: deliveryStatus ? deliveryStatus : null,
      // 		};
      // 		const itemSl = await createScheduleLine(scheduleLine);
      // 		return itemSl.id.toString();
      // 	})
      // );

      const i = {
        id: item.id,
        itemNo: item.itemNo,
        productId: item.productId,
        description: item.description,
        quantity: item.quantity,
        uom: item.uom,
        unitPrice: item.unitPrice,
        totalAmount: item.totalAmount,
        discount: item.discount,
        deliveryAddress: item.deliveryAddress,
        supplierStatusItem: item.supplierStatusItem,
        scheduleLine: item.scheduleLine,
        currency: item.currency,
        dateUpdated: item.dateUpdated,
        timeUpdated: item.timeUpdated,
      };
      return await updateItemById(i);
    },
    updateSupplierStatusItem: async (parent, { item }, context, info) => {
      const { updateSupplierStatusItemById } = context;

      const i = {
        id: item.id,
        itemNo: item.itemNo,
        productId: item.productId,
        description: item.description,
        quantity: item.quantity,
        uom: item.uom,
        unitPrice: item.unitPrice,
        totalAmount: item.totalAmount,
        discount: item.discount,
        deliveryAddress: item.deliveryAddress,
        supplierStatusItem: item.supplierStatusItem,
        scheduleLine: item.scheduleLine,
        currency: item.currency,
        dateUpdated: item.dateUpdated,
        timeUpdated: item.timeUpdated,
      };
      return await updateSupplierStatusItemById(i);
    },

    deleteItem: async (parent, { id }, context, info) => {
      const { deleteItemById } = context;
      return await deleteItemById(id);
    },
  },
};

export default itemResolvers;
