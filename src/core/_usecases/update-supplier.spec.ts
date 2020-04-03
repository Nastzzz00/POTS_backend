import { updateUCSupplier } from './update-supplier-usecase';
const updateSupplier = updateUCSupplier();

describe('UseCase: Update a Supplier ', () => {
	it('should be able to update a supplier', () => {
		const supplierInput = {
			supplierNo: '002',
			supplierName: 'Supplier Name',
			address: {
				building_name: 'buildings',
				street: 'streets',
				city: 'cities',
				state: 'states',
				zip_code: '1234',
			},
			contactNumber: '1245',
			contactPerson: 'Harrold',
			tin: '1234567890',
		};

		const oldSupplierInput = {
			supplierNo: '001',
			supplierName: 'Supplier Name',
			address: {
				building_name: 'buildings',
				street: 'streets',
				city: 'cities',
				state: 'states',
				zip_code: '1234',
			},
			contactNumber: '1245',
			contactPerson: 'Harrold',
			tin: '1234567890',
		};
		const newSupplier = updateSupplier(supplierInput, oldSupplierInput);
		expect(newSupplier).toMatchObject(supplierInput);
	});
});
