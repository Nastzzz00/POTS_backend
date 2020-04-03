import { createMakePurchaseOrder } from './purchaseOrder';

const makePurchaseOrder = createMakePurchaseOrder();

describe('Purchase Order', () => {
	it('must have an purchaseOrderNo', () => {
		const purchaseOrderInput = {
			purchaseOrderNo: '',
			shipmentNo: '123',
			adminStatus: 'status',
			supplierStatusHeader: 'supplierStatus',
			supplier: {
				supplierNo: '',
				supplierName: 'Juan Dela Cruz',
				address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
				contactPerson: 'Basil Valdez',
				contactNumber: '1234567',
				tin: '12345',
			},
			postingDate: '03/03/20200',
			documentDate: '03/03/20200',
			vendorAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			items: [
				{
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
				},
			],
		};
		expect(() => makePurchaseOrder(purchaseOrderInput)).toThrow('Purchase Order Number is required');
	});
	it('must have an shipmentNo', () => {
		const purchaseOrderInput = {
			purchaseOrderNo: '001',
			shipmentNo: '',
			adminStatus: 'status',
			supplierStatusHeader: 'supplierStatus',
			supplier: {
				supplierNo: '',
				supplierName: 'Juan Dela Cruz',
				address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
				contactPerson: 'Basil Valdez',
				contactNumber: '1234567',
				tin: '12345',
			},
			postingDate: '03/03/20200',
			documentDate: '03/03/20200',
			vendorAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			items: [
				{
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
				},
			],
		};
		expect(() => makePurchaseOrder(purchaseOrderInput)).toThrow('Shipment Number is required');
	});
	it('must have an supplier', () => {
		const purchaseOrderInput = {
			purchaseOrderNo: '001',
			shipmentNo: '123',
			adminStatus: 'status',
			supplierStatusHeader: 'supplierStatus',
			supplier: '',
			postingDate: '03/03/20200',
			documentDate: '03/03/20200',
			vendorAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			items: [
				{
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
				},
			],
		};
		expect(() => makePurchaseOrder(purchaseOrderInput)).toThrow('Supplier is required');
	});
	it('must have a items', () => {
		const purchaseOrderInput = {
			purchaseOrderNo: '001',
			shipmentNo: '123',
			adminStatus: 'status',
			supplierStatusHeader: 'supplierStatus',
			supplier: {
				supplierNo: '',
				supplierName: 'Juan Dela Cruz',
				address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
				contactPerson: 'Basil Valdez',
				contactNumber: '1234567',
				tin: '12345',
			},
			postingDate: '03/03/20200',
			documentDate: '03/03/20200',
			vendorAddress: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			items: '',
		};
		expect(() => makePurchaseOrder(purchaseOrderInput)).toThrow('Item/s is/are required');
	});
	it('must have an verndorAddress', () => {
		const purchaseOrderInput = {
			purchaseOrderNo: '001',
			shipmentNo: '123',
			adminStatus: 'status',
			supplierStatusHeader: 'supplierStatus',
			supplier: {
				supplierNo: '',
				supplierName: 'Juan Dela Cruz',
				address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
				contactPerson: 'Basil Valdez',
				contactNumber: '1234567',
				tin: '12345',
			},
			postingDate: '03/03/20200',
			documentDate: '03/03/20200',
			vendorAddress: '',
			items: [
				{
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
				},
			],
		};
		expect(() => makePurchaseOrder(purchaseOrderInput)).toThrow('Vendor Address is required');
	});
});
