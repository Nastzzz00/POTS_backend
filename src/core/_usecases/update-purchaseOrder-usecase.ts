import { makePurchaseOrder, TPurchaseOrder } from '../purchaseOrder';

const updateUCPurchaseOrder = () => (purchaseOrderInput, oldValue) => {
  let newPurchaseOrder: TPurchaseOrder = {
    purchaseOrderNo: oldValue.purchaseOrderNo,
    shipmentNo: oldValue.shipmentNo,
    adminStatus: oldValue.adminStatus,
    supplierStatusHeader: oldValue.supplierStatusHeader,
    supplier: oldValue.supplier,
    vendorAddress: oldValue.vendorAddress,
    documentDate: oldValue.documentDate,
    items: oldValue.items,
    postingDate: oldValue.postingDate,
  };

  for (let prop in purchaseOrderInput) {
    if (purchaseOrderInput[prop]) {
      newPurchaseOrder[prop] = purchaseOrderInput[prop];
    }
    // else {
    // 	newPurchaseOrder[prop] = oldValue[prop];
    // }
  }
  const po = makePurchaseOrder(newPurchaseOrder);
  return { ...po, id: oldValue.id };
};

export { updateUCPurchaseOrder };
