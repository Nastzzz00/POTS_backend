import { createUCCreateScheduleLine } from './create-scheduleLine-usecase';

const addScheduleLine = createUCCreateScheduleLine();

describe('Schedule Line CRUD', () => {
	it('should be able to create a supplier', () => {
		const scheduleLineInput = {
			quantity: '1000',
			uom: 'kg',
			unitPrice: '10',
			totalAmount: '100000',
			deliveryDateAndTime: '03/03/2020, 4:30PM',
		};
		const newScheduleLine = addScheduleLine(scheduleLineInput);
		expect(newScheduleLine).toMatchObject(scheduleLineInput);
	});
});
