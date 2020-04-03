export type TSupplierStatus = {
	status: string;
	dateCreated: string;
	timeCreated: string;
};

const createMakeSupplierStatus = () => ({ status, dateCreated, timeCreated }): TSupplierStatus => {
	if (!status) {
		throw new Error('Status is required.');
	}

	// if (!dateCreated) {
	// 	throw new Error('Date Created is required.');
	// }

	// if (!timeCreated) {
	// 	throw new Error('Time Created is required.');
	// }

	return { status: status, dateCreated: dateCreated, timeCreated: timeCreated };
};

export { createMakeSupplierStatus };
