import { makeSupplierStatus } from '.';

describe('Supplier Status', () => {
	it('must have a status', () => {
		const supplierStatus = {
			status: '',
			dateCreated: '03/03/2020',
			timeCreated: '04:30 PM',
		};
		expect(() => makeSupplierStatus(supplierStatus)).toThrow('Status is required.');
	});

	// it('must have a dateCreated', () => {
	// 	const supplierStatus = {
	// 		status: 'status',
	// 		dateCreated: '',
	// 		timeCreated: '04:30 PM',
	// 	};
	// 	expect(() => makeSupplierStatus(supplierStatus)).toThrow('Date Created is required.');
	// });

	// it('must have a timeCreated', () => {
	// 	const supplierStatus = {
	// 		status: 'status',
	// 		dateCreated: '03/03/2020',
	// 		timeCreated: '',
	// 	};
	// 	expect(() => makeSupplierStatus(supplierStatus)).toThrow('Time Created is required.');
	// });
});
