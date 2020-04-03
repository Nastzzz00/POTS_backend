import { DeleteRecordByIDDB } from './delete-data-db';

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

describe('Delete Supplier', () => {
	it('Should be able to delete a supplier by ID in DB', async () => {
		const oneData = [mockSupplier[0]];
		const mockDB: any = {
			deleteById: jest.fn(async id => {
				const filterMock = data => {
					if (data._id === id) {
						return data;
					}
				};

				return mockSupplier.filter(filterMock);
			}),
		};
		const getOneData = DeleteRecordByIDDB(mockDB);
		const data = await getOneData('1');
		expect(mockDB.deleteById.mock.calls.length).toBe(1);

		expect(data).toMatchObject(oneData);
	});
});
