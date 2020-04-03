import { updateUCScheduleLine } from './update-scheduleLine-usecase';

const updateScheduleLine = updateUCScheduleLine();

describe('UseCase: Update a Schedule Line ', () => {
	it('should be able to update a scheduleLine', () => {
		const scheduleLineInput = {
			quantity: '10',
			unitPrice: '1000',
			uom: 'kg',
			deliveryDateAndTime: '03/03/2020',
			totalAmount: '10000',
			deliveryStatus: [{ status: 'status' }, { status: 'status' }],
		};

		const oldScheduleLineInput = {
			quantity: '10',
			unitPrice: '1000',
			uom: 'kg',
			deliveryDateAndTime: '03/03/2020',
			totalAmount: '10000',
			deliveryStatus: { status: 'status' },
		};
		const newScheduleLine = updateScheduleLine(scheduleLineInput, oldScheduleLineInput);
		expect(newScheduleLine).toMatchObject(scheduleLineInput);
	});
});
