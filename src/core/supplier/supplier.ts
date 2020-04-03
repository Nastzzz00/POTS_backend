export type TSupplier = {
	supplierNo: string;
	supplierName: string;
	address: string;
	contactPerson: string;
	contactNumber: string;
	tin: string;
};

const createMakeSupplier = () => (supplier): TSupplier => {
	const { supplierName, address, supplierNo, tin, contactNumber, contactPerson } = supplier;
	if (!supplierNo) {
		throw new Error('Supplier No. is required.');
	}
	if (!supplierName) {
		throw new Error('Supplier Name is required.');
	}
	if (!address) {
		throw new Error('Address is required.');
	}
	if (!contactPerson) {
		throw new Error('Contact Person is required.');
	}
	if (!contactNumber) {
		throw new Error('Contact Number is required.');
	}
	if (!tin) {
		throw new Error('TIN is required.');
	}

	return {
		supplierNo: supplierNo,
		supplierName: supplierName,
		address: address,
		tin: tin,
		contactNumber: contactNumber,
		contactPerson: contactPerson,
	};
};

export { createMakeSupplier };
