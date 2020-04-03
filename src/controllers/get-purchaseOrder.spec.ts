import { getAllDataDB, getByIDDB } from './retrieve-data-db';

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

describe('Retrieve Purchase Order', () => {
	it('Should be able to return all purchase orders from db', async () => {
		const mockDB: any = {
			getAll: jest.fn(async () => {
				return [...mockPurchaseOrder];
			}),
		};

		const getAllPurchaseOrders = getAllDataDB(mockDB);
		const allPurchaseOrders = await getAllPurchaseOrders();
		expect(mockDB.getAll.mock.calls.length).toBe(1);
		expect(allPurchaseOrders).toMatchObject(mockPurchaseOrder);
	});

	it('Should be able to return one item from db', async () => {
		const onePurchaseOrder = [mockPurchaseOrder[0]];
		const mockDB: any = {
			getById: jest.fn(async id => {
				const filterPurchaseOrder = cust => {
					if (cust._id === id) {
						return cust;
					}
				};

				return mockPurchaseOrder.filter(filterPurchaseOrder);
			}),
		};

		const getOnePurchaseOrder = getByIDDB(mockDB);
		const purchaseOrder = await getOnePurchaseOrder('1');
		expect(mockDB.getById.mock.calls.length).toBe(1);

		expect(purchaseOrder).toMatchObject(onePurchaseOrder);
	});
});
