import { createUCCreateItem } from './create-item-usecase';

const addItem = createUCCreateItem();

describe('Item CRUD', () => {
	it('should be able to create an item', () => {
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
			scheduleLine: { quantity: 'quantity', uom: 'uom', deliveryDate: 'deliveryDate', supplerStatus: 'supplerStatus' },
			currency: 'currency',
			dateUpdated: '',
			timeUpdated: '',
		};
		const newItem = addItem(itemInput);
		expect(newItem).toMatchObject(itemInput);
	});
});
