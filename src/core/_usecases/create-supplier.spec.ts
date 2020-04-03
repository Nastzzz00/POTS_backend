import { createUCCreateSupplier } from './create-supplier-usecase';

const addSupplier = createUCCreateSupplier();

describe('Supplier CRUD', () => {
	it('should be able to create a supplier', () => {
		const supplierInput = {
			supplierNo: '001',
			supplierName: 'Nat',
			address: {
				building_name: 'building',
				street: 'street',
				city: 'city',
				state: 'state',
				zip_code: '124365',
			},
			contactPerson: '1234500',
			contactNumber: '091234',
			tin: '1234567',
		};
		const newSupplier = addSupplier(supplierInput);
		expect(newSupplier).toMatchObject(supplierInput);
	});
});
