import { getAllDataDB, getByIDDB } from './retrieve-data-db';

const mockItem = [
	{
		_id: '1',
		itemNo: '001',
		description: 'Beef',
		productId: '0001',
		quantity: '10',
		uom: 'kg',
		unitPrice: '1000',
		discount: '10%',
		totalAmount: '9000',
		supplierStatusItem: 'Distpatched',
		deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
		scheduleLine: { quantity: '', uom: 'uom', deliveryDate: 'deliveryDate', supplerStatus: 'supplerStatus' },
		currency: 'currency',
		dateUpdated: '',
		timeUpdated: '',
	},
	{
		_id: '2',
		itemNo: '002',
		description: 'Beef',
		productId: '0001',
		quantity: '10',
		uom: 'kg',
		unitPrice: '1000',
		discount: '10%',
		totalAmount: '9000',
		supplierStatusItem: 'Distpatched',
		deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
		scheduleLine: { quantity: '', uom: 'uom', deliveryDate: 'deliveryDate', supplerStatus: 'supplerStatus' },
		currency: 'currency',
		dateUpdated: '',
		timeUpdated: '',
	},
];

describe('Retrieve Item', () => {
	it('Should be able to return all item from db', async () => {
		const mockDB: any = {
			getAll: jest.fn(async () => {
				return [...mockItem];
			}),
		};

		const getAllItems = getAllDataDB(mockDB);
		const allItems = await getAllItems();
		expect(mockDB.getAll.mock.calls.length).toBe(1);
		expect(allItems).toMatchObject(mockItem);
	});

	it('Should be able to return one item from db', async () => {
		const oneItem = [mockItem[0]];
		const mockDB: any = {
			getById: jest.fn(async id => {
				const filterItem = cust => {
					if (cust._id === id) {
						return cust;
					}
				};

				return mockItem.filter(filterItem);
			}),
		};

		const getOneItem = getByIDDB(mockDB);
		const item = await getOneItem('1');
		expect(mockDB.getById.mock.calls.length).toBe(1);

		expect(item).toMatchObject(oneItem);
	});
});
