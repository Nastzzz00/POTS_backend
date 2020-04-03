import { createCreateSupplierDB } from './create-supplier-db';

describe('Create Supplier', () => {
	it('Should be able to save a supplier to a database', async () => {
		const mockDB: any = {
			insert: jest.fn(async input => {
				return { _id: '1', ...input };
			}),
		};
		const createSupplier = createCreateSupplierDB(mockDB);

		const supplierInput = {
			_id: '1',
			supplierNo: '001',
			supplierName: 'Juan Dela Cruz',
			address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			contactPerson: 'Basil Valdez',
			contactNumber: '1234567',
			tin: '12345',
		};

		const newSupplier = await createSupplier(supplierInput);

		expect(mockDB.insert.mock.calls.length).toBe(1);
		expect(newSupplier).toMatchObject({ _id: '1', ...supplierInput });
	});
});
