import { makeItem, TItem } from '../item';

const updateUCSupplierStatusItem = () => (itemInput, oldValue) => {
  let newItem: TItem = {
    itemNo: oldValue.itemNo,
    productId: oldValue.productId,
    description: oldValue.description,
    quantity: oldValue.quantity,
    uom: oldValue.uom,
    unitPrice: oldValue.unitPrice,
    discount: oldValue.discount,
    totalAmount: oldValue.totalAmount,
    deliveryAddress: oldValue.deliveryAddress,
    supplierStatusItem: itemInput.supplierStatusItem,
    scheduleLine: oldValue.scheduleLine,
    currency: oldValue.currency,
    dateUpdated: oldValue.dateUpdated,
    timeUpdated: oldValue.timeUpdated,
  };

  for (let prop in itemInput) {
    if (itemInput[prop]) {
      newItem[prop] = itemInput[prop];
    }
    // else {
    //   newItem[prop] = oldValue[prop];
    // }
  }
  const item = makeItem(newItem);
  return { ...item, id: oldValue.id };
};

export { updateUCSupplierStatusItem };
