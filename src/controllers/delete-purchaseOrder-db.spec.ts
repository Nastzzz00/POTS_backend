import { DeleteRecordByIDDB } from './delete-data-db';

const mockPurchaseOrder = [
	{
		_id: '1',
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
	},
	{
		_id: '2',
		purchaseOrderNo: '002',
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
	},
];

describe('Delete purchase order', () => {
	it('Should be able to delete a pruchase order by ID in DB', async () => {
		const oneData = [mockPurchaseOrder[0]];
		const mockDB: any = {
			deleteById: jest.fn(async id => {
				const filterMock = data => {
					if (data._id === id) {
						return data;
					}
				};

				return mockPurchaseOrder.filter(filterMock);
			}),
		};
		const getOneData = DeleteRecordByIDDB(mockDB);
		const data = await getOneData('1');
		expect(mockDB.deleteById.mock.calls.length).toBe(1);

		expect(data).toMatchObject(oneData);
	});
});
