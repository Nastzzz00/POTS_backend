import { updateUCSupplierStatus } from './update-supplierStatus-usecase';
const updateSupplierStatus = updateUCSupplierStatus();

describe('UseCase: Update Supplier Status ', () => {
	it('should be able to update a Supplier Status', () => {
		const supplierStatusInput = {
			status: 'Delivered',
		};

		const oldSupplierStatusInput = {
			status: 'Dispatched',
			dateCreated: '03/03/2020',
			timeCreated: '4:30 PM',
		};
		const newSupplierStatus = updateSupplierStatus(supplierStatusInput, oldSupplierStatusInput);
		expect(newSupplierStatus).toMatchObject(supplierStatusInput);
	});
});
