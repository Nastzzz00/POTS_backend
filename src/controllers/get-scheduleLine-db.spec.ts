import { getAllDataDB, getByIDDB } from './retrieve-data-db';

const mockScheduleLine = [
	{
		_id: '1',
		quantity: 'quantity',
		uom: 'uom',
		deliveryDateAndTime: 'dateandtime',
		unitPrice: 'unitPrice',
		totalAmount: '',
		deliveryStatus: 'supplerStatus',
	},
	{
		_id: '2',
		quantity: 'quantity',
		uom: 'uom',
		deliveryDateAndTime: 'dateandtime',
		unitPrice: 'unitPrice',
		totalAmount: '',
		deliveryStatus: 'supplerStatus',
	},
];

describe('Retrieve Supplier', () => {
	it('Should be able to return all suppliers from db', async () => {
		const mockDB: any = {
			getAll: jest.fn(async () => {
				return [...mockScheduleLine];
			}),
		};

		const getAllSuppliers = getAllDataDB(mockDB);
		const allSuppliers = await getAllSuppliers();
		expect(mockDB.getAll.mock.calls.length).toBe(1);
		expect(allSuppliers).toMatchObject(mockScheduleLine);
	});

	it('Should be able to return one supplier from db', async () => {
		const oneSupplier = [mockScheduleLine[0]];
		const mockDB: any = {
			getById: jest.fn(async id => {
				const filterSupplier = cust => {
					if (cust._id === id) {
						return cust;
					}
				};

				return mockScheduleLine.filter(filterSupplier);
			}),
		};

		const getOneSupplier = getByIDDB(mockDB);
		const supplier = await getOneSupplier('1');
		expect(mockDB.getById.mock.calls.length).toBe(1);

		expect(supplier).toMatchObject(oneSupplier);
	});
});
