import { createCreateScheduleLineDB } from './create-scheduleLine-db';

describe('Create Schedule Line', () => {
	it('Should be able to save a scheduleLine to a database', async () => {
		const mockDB: any = {
			insert: jest.fn(async input => {
				return { _id: '1', ...input };
			}),
		};
		const createScheduleLine = createCreateScheduleLineDB(mockDB);

		const scheduleLineInput = {
			_id: '1',
			quantity: 'quantity',
			uom: 'uom',
			deliveryDateAndTime: 'dateandtime',
			unitPrice: 'unitPrice',
			totalAmount: '1000',
			deliveryStatus: 'supplerStatus',
		};

		const newScheduleLine = await createScheduleLine(scheduleLineInput);

		expect(mockDB.insert.mock.calls.length).toBe(1);
		expect(newScheduleLine).toMatchObject({ _id: '1', ...scheduleLineInput });
	});
});
