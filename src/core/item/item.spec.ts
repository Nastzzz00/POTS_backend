import { createMakeItem } from './item';
const makeItem = createMakeItem();

describe('Item', () => {
	it('must have an itemNo', () => {
		const item = {
			itemNo: '',
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
		expect(() => makeItem(item)).toThrow('Item Number is required.');
	});
	it('must have a description', () => {
		const item = {
			itemNo: '001',
			description: '',
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
		expect(() => makeItem(item)).toThrow('Description is required.');
	});
	it('must have a productId', () => {
		const item = {
			itemNo: '001',
			description: 'Beef',
			productId: '',
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
		expect(() => makeItem(item)).toThrow('Product ID is required.');
	});
	it('must have a quantity', () => {
		const item = {
			itemNo: '001',
			description: 'Beef',
			productId: '0001',
			quantity: '',
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
		expect(() => makeItem(item)).toThrow('Quantity is required.');
	});
	it('must have a uom', () => {
		const item = {
			itemNo: '001',
			description: 'Beef',
			productId: '0001',
			quantity: '10',
			uom: '',
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
		expect(() => makeItem(item)).toThrow('UOM is required.');
	});
	it('must have a unitPrice', () => {
		const item = {
			itemNo: '001',
			description: 'Beef',
			productId: '0001',
			quantity: '10',
			uom: 'kg',
			unitPrice: '',
			discount: '10%',
			totalAmount: '9000',
			supplierStatusItem: 'Distpatched',
			deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			scheduleLine: { quantity: '', uom: 'uom', deliveryDate: 'deliveryDate', supplerStatus: 'supplerStatus' },
			currency: 'currency',
			dateUpdated: '',
			timeUpdated: '',
		};
		expect(() => makeItem(item)).toThrow('Unit Price is required.');
	});
	it('must have a totalAmount', () => {
		const item = {
			itemNo: '001',
			description: 'Beef',
			productId: '0001',
			quantity: '10',
			uom: 'kg',
			unitPrice: '1000',
			discount: '10%',
			totalAmount: '',
			supplierStatusItem: 'Distpatched',
			deliveryAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			scheduleLine: { quantity: '', uom: 'uom', deliveryDate: 'deliveryDate', supplerStatus: 'supplerStatus' },
			currency: 'currency',
			dateUpdated: '',
			timeUpdated: '',
		};
		expect(() => makeItem(item)).toThrow('Total Amount is required.');
	});
	it('must have a Delivery Address', () => {
		const item = {
			itemNo: '001',
			description: 'Beef',
			productId: '0001',
			quantity: '10',
			uom: 'kg',
			unitPrice: '1000',
			discount: '10%',
			totalAmount: '9000',
			supplierStatusItem: 'Distpatched',
			deliveryAddress: '',
			scheduleLine: { quantity: 'quantity', uom: 'uom', deliveryDate: 'deliveryDate', supplerStatus: 'supplerStatus' },
			currency: 'currency',
			dateUpdated: '',
			timeUpdated: '',
		};
		expect(() => makeItem(item)).toThrow('Delivery Address is required.');
	});
	it('must have a Delivery Address', () => {
		const item = {
			itemNo: '001',
			description: 'Beef',
			productId: '0001',
			quantity: '10',
			uom: 'kg',
			unitPrice: '1000',
			discount: '10%',
			totalAmount: '9000',
			supplierStatusItem: 'Distpatched',
			deliveryAddress: '',
			scheduleLine: { quantity: 'quantity', uom: 'uom', deliveryDate: 'deliveryDate', supplerStatus: 'supplerStatus' },
			currency: 'currency',
			dateUpdated: '',
			timeUpdated: '',
		};
		expect(() => makeItem(item)).toThrow('Delivery Address is required.');
	});
	it('must have a scheduleLine', () => {
		const item = {
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
			scheduleLine: '',
			currency: 'currency',
			dateUpdated: '',
			timeUpdated: '',
		};
		expect(() => makeItem(item)).toThrow('Schedule Line is required.');
	});
	it('must have a currency', () => {
		const item = {
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
			currency: '',
			dateUpdated: '',
			timeUpdated: '',
		};
		expect(() => makeItem(item)).toThrow('Currency is required.');
	});
});
