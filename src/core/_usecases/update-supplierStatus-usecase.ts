import { makeSupplierStatus, TSupplierStatus } from '../supplierStatus';

const updateUCSupplierStatus = () => (supplierStatusInput, oldValue) => {
  let newSupplierStatus: TSupplierStatus = {
    status: oldValue.status,
    dateCreated: oldValue.dateCreated,
    timeCreated: oldValue.timeCreated,
  };
  for (let prop in supplierStatusInput) {
    if (supplierStatusInput[prop]) {
      newSupplierStatus[prop] = supplierStatusInput[prop];
    }
    // else {
    // 	newSupplierStatus[prop] = oldValue[prop];
    // }
  }
  const supplierStatus = makeSupplierStatus(newSupplierStatus);
  return { ...supplierStatus, id: oldValue.id };
};

export { updateUCSupplierStatus };
