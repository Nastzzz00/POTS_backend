import { createUCPurchaseOrder } from './create-purchaseOrder-usecase';

const addPurchaseOrder = createUCPurchaseOrder();

describe('Purchase Order Create', () => {
	it('should create a purchase order', () => {
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

		const newPurchaseItem = addPurchaseOrder(purchaseOrderInput);
		expect(newPurchaseItem).toMatchObject(purchaseOrderInput);
	});
});
