import { createCreatePurchaseOrderDB } from './create-purchaseOrder-db';

describe('Create Purchase Order', () => {
	const mockDb: any = {
		insert: jest.fn(async input => {
			return { _id: '1', ...input };
		}),
	};
	const createPurchaseOrder = createCreatePurchaseOrderDB(mockDb);

	it('should be able to save a delivery item in the DB', async () => {
		const given = {
			purchaseOrderNo: '001',
			shipmentNo: '123',
			adminStatus: 'status',
			supplierStatusHeader: 'supplierStatus',
			supplier: {
				supplierNo: '001',
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
				{
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
					scheduleLine: '',
					currency: 'currency',
					dateUpdated: '',
					timeUpdated: '',
				},
			],
		};
		const newPurchaseOrder = await createPurchaseOrder(given);
		expect(mockDb.insert.mock.calls.length).toBe(1);
		expect(newPurchaseOrder).toMatchObject({ _id: '1', ...given });
	});
});
