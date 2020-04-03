import { DeleteRecordByIDDB } from './delete-data-db';

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

describe('Delete Item', () => {
	it('Should be able to delete an item by ID in DB', async () => {
		const oneData = [mockItem[0]];
		const mockDB: any = {
			deleteById: jest.fn(async id => {
				const filterMock = data => {
					if (data._id === id) {
						return data;
					}
				};

				return mockItem.filter(filterMock);
			}),
		};
		const getOneData = DeleteRecordByIDDB(mockDB);
		const data = await getOneData('1');
		expect(mockDB.deleteById.mock.calls.length).toBe(1);

		expect(data).toMatchObject(oneData);
	});
});
