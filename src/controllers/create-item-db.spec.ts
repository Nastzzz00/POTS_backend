import { createCreateItemDB } from './create-item-db';

describe('Create Item', () => {
	it('Should be able to save an item to a database', async () => {
		const mockDB: any = {
			insert: jest.fn(async input => {
				return { _id: '1', ...input };
			}),
		};
		const createItem = createCreateItemDB(mockDB);

		const itemInput = {
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
		};

		const newItem = await createItem(itemInput);

		expect(mockDB.insert.mock.calls.length).toBe(1);
		expect(newItem).toMatchObject({ _id: '1', ...itemInput });
	});
});
