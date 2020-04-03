import { makeSupplier, TSupplier } from '../supplier';

const updateUCSupplier = () => (supplierInput, oldValue) => {
  let newSupplier: TSupplier = {
    supplierNo: oldValue.supplierNo,
    supplierName: oldValue.supplierName,
    address: oldValue.address,
    contactNumber: oldValue.contactNumber,
    contactPerson: oldValue.contactPerson,
    tin: oldValue.tin,
  };

  for (let prop in supplierInput) {
    if (supplierInput[prop]) {
      newSupplier[prop] = supplierInput[prop];
    }
    // else {
    // 	newSupplier[prop] = oldValue[prop];
    // }
  }
  const supplier = makeSupplier(newSupplier);
  return { ...supplier, id: oldValue.id };
};

export { updateUCSupplier };
