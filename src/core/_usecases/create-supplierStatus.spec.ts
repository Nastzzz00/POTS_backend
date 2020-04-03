import { createUCCreateSupplierStatus } from './create-supplierStatus-usecase';

const addSupplierStatus = createUCCreateSupplierStatus();

describe('Supplier Status CRUD', () => {
	it('should be able to create a supplier', () => {
		const supplierStatusInput = {
			status: 'Dispatched',
			dateCreated: 'Feb 14, 2020',
			timeCreated: '4:30 PM',
		};
		const newSupplierStatus = addSupplierStatus(supplierStatusInput);
		expect(newSupplierStatus).toMatchObject(supplierStatusInput);
	});
});
