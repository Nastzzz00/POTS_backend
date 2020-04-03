import { DeleteRecordByIDDB } from './delete-data-db';

const mockScheduleLine = [
	{
		_id: '1',
		quantity: 'quantity',
		uom: 'uom',
		deliveryDateAndTime: 'dateandtime',
		unitPrice: 'unitPrice',
		totalAmount: '',
		deliveryStatus: 'supplerStatus',
	},
	{
		_id: '2',
		quantity: 'quantity',
		uom: 'uom',
		deliveryDateAndTime: 'dateandtime',
		unitPrice: 'unitPrice',
		totalAmount: '',
		deliveryStatus: 'supplerStatus',
	},
];

describe('Delete Supplier', () => {
	it('Should be able to delete a scheduleLine by ID in DB', async () => {
		const oneData = [mockScheduleLine[0]];
		const mockDB: any = {
			deleteById: jest.fn(async id => {
				const filterMock = data => {
					if (data._id === id) {
						return data;
					}
				};

				return mockScheduleLine.filter(filterMock);
			}),
		};
		const getOneData = DeleteRecordByIDDB(mockDB);
		const data = await getOneData('1');
		expect(mockDB.deleteById.mock.calls.length).toBe(1);

		expect(data).toMatchObject(oneData);
	});
});
