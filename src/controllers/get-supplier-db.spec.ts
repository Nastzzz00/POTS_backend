import { getAllDataDB, getByIDDB } from './retrieve-data-db';

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

describe('Retrieve Supplier', () => {
	it('Should be able to return all suppliers from db', async () => {
		const mockDB: any = {
			getAll: jest.fn(async () => {
				return [...mockSupplier];
			}),
		};

		const getAllSuppliers = getAllDataDB(mockDB);
		const allSuppliers = await getAllSuppliers();
		expect(mockDB.getAll.mock.calls.length).toBe(1);
		expect(allSuppliers).toMatchObject(mockSupplier);
	});

	it('Should be able to return one supplier from db', async () => {
		const oneSupplier = [mockSupplier[0]];
		const mockDB: any = {
			getById: jest.fn(async id => {
				const filterSupplier = cust => {
					if (cust._id === id) {
						return cust;
					}
				};

				return mockSupplier.filter(filterSupplier);
			}),
		};

		const getOneSupplier = getByIDDB(mockDB);
		const supplier = await getOneSupplier('1');
		expect(mockDB.getById.mock.calls.length).toBe(1);

		expect(supplier).toMatchObject(oneSupplier);
	});
});
