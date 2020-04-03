import { updateSupplierByIDDB } from './update-supplier-db';

const mockSupplier = [
	{
		_id: '1',
		supplierNo: '001',
		supplierName: 'Juan Dela Cruz',
		address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
		contactPerson: 'Basil Valdez',
		contactNumber: '1234567',
		tin: '12345',
	},
	{
		supplierNo: '002',
		supplierName: 'Juan Dela Cruz',
		address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
		contactPerson: 'Basil Valdez',
		contactNumber: '1234567',
		tin: '12345',
	},
];

describe('Update Supplier', () => {
	const mockDb: any = {
		updateById: jest.fn(async input => {
			return { ...input };
		}),
		getById: jest.fn(async id => {
			const filterMock = data => {
				if (data._id === id) {
					return data;
				}
			};

			return mockSupplier.filter(filterMock);
		}),
	};
	const updateSupplier = updateSupplierByIDDB(mockDb);

	it('should be able to update a supplier in the DB', async () => {
		const given = {
			supplierNo: '001',
			supplierName: 'Juan Dela Cruzis',
			address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			contactPerson: 'Basil Valdez',
			contactNumber: '1234567',
			tin: '12345',
		};

		const newData = await updateSupplier(given);

		expect(mockDb.getById.mock.calls.length).toBe(1);
		expect(mockDb.updateById.mock.calls.length).toBe(1);
		expect(newData).toMatchObject(given);
	});
});
