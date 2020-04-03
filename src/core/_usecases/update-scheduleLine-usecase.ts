import { makeScheduleLine, TScheduleLine } from '../scheduleLine';

const updateUCScheduleLine = () => (scheduleLineInput, oldValue) => {
  let newScheduleLine: TScheduleLine = {
    quantity: oldValue.quantity,
    uom: oldValue.uom,
    unitPrice: oldValue.unitPrice,
    deliveryDateAndTime: oldValue.deliveryDateAndTime,
    totalAmount: oldValue.totalAmount,
    deliveryStatus: oldValue.deliveryStatus,
  };

  for (let prop in scheduleLineInput) {
    if (scheduleLineInput[prop]) {
      newScheduleLine[prop] = scheduleLineInput[prop];
    }
    // else {
    // 	newScheduleLine[prop] = oldValue[prop];
    // }
  }
  const scheduleLine = makeScheduleLine(newScheduleLine);
  return { ...scheduleLine, id: oldValue.id };
};

export { updateUCScheduleLine };
