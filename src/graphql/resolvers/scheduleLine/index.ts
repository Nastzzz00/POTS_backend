const scheduleLineResolvers = {
  ScheduleLine: {
    deliveryStatus: async (parent, args, context, info) => {
      const { getAllSupplierStatusByScheduleLine } = context;
      return (
        (await getAllSupplierStatusByScheduleLine(parent.deliveryStatus)) ||
        null
      );
    },
  },
  Query: {
    scheduleLine: async (parent, { id }, { getScheduleLineById }, info) => {
      return getScheduleLineById(id);
    },

    allScheduleLines: async (parent, args, { getAllScheduleLines }, info) => {
      return getAllScheduleLines();
    },
  },
  Mutation: {
    createScheduleLine: async (parent, { scheduleLine }, context, info) => {
      const { createScheduleLine, createSupplierStatus } = context;

      let deliveryStatus;
      if (scheduleLine.deliveryStatus) {
        deliveryStatus = await Promise.all(
          scheduleLine.deliveryStatus.map(async ds => {
            const deliveryStatus = await createSupplierStatus(ds);
            return deliveryStatus.id.toString();
          }),
        );
      }

      const sl = {
        quantity: scheduleLine.quantity,
        uom: scheduleLine.uom,
        unitPrice: scheduleLine.unitPrice,
        totalAmount: scheduleLine.totalAmount,
        deliveryDateAndTime: scheduleLine.deliveryDateAndTime,
        deliveryStatus: deliveryStatus ? deliveryStatus : null,
      };

      return await createScheduleLine(sl);
    },

    updateScheduleLine: async (parent, { scheduleLine }, context, info) => {
      const { updateScheduleLine, createSupplierStatus } = context;

      let deliveryStatus;
      if (scheduleLine.deliveryStatus) {
        deliveryStatus = await Promise.all(
          scheduleLine.deliveryStatus.map(async ds => {
            const deliveryStatus = await createSupplierStatus(ds);
            return deliveryStatus.id.toString();
          }),
        );
      }

      const sl = {
        id: scheduleLine.id,
        quantity: scheduleLine.quantity,
        uom: scheduleLine.uom,
        unitPrice: scheduleLine.unitPrice,
        totalAmount: scheduleLine.totalAmount,
        deliveryDateAndTime: scheduleLine.deliveryDateAndTime,
        deliveryStatus: deliveryStatus ? deliveryStatus : null,
      };

      return await updateScheduleLine(sl);
    },

    deleteScheduleLine: async (parent, { id }, context, info) => {
      const { deleteScheduleLineById } = context;
      return await deleteScheduleLineById(id);
    },
  },
};

export default scheduleLineResolvers;
