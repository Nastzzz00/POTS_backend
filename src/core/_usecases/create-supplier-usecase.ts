import { makeSupplier } from '../supplier';

const createUCCreateSupplier = () => suppplierInput => {
	const supplier = makeSupplier({
		supplierNo: suppplierInput.supplierNo,
		supplierName: suppplierInput.supplierName,
		address: suppplierInput.address,
		tin: suppplierInput.tin,
		contactNumber: suppplierInput.contactNumber,
		contactPerson: suppplierInput.contactPerson,
	});

	return supplier;
};

export { createUCCreateSupplier };
