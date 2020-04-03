import { updateScheduleLineByIDDB } from './update-scheduleLine-db';

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

describe('Update User', () => {
	const mockDb: any = {
		updateById: jest.fn(async input => {
			return { ...input };
		}),
		getById: jest.fn(async id => {
			const filterMock = data => {
				if (data._id === id) {
					return data;
				}
			};

			return mockScheduleLine.filter(filterMock);
		}),
	};
	const updateScheduleLine = updateScheduleLineByIDDB(mockDb);

	it('should be able to update a user in the DB', async () => {
		const given = {
			quantity: 'quantity',
			uom: 'uom',
			deliveryDateAndTime: 'dateandtime',
			unitPrice: 'unitPrice',
			totalAmount: '1000',
			deliveryStatus: 'supplerStatus',
		};

		const newData = await updateScheduleLine(given);

		expect(mockDb.getById.mock.calls.length).toBe(1);
		expect(mockDb.updateById.mock.calls.length).toBe(1);
		expect(newData).toMatchObject(given);
	});
});
