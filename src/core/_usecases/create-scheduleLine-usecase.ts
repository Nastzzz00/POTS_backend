import { makeScheduleLine } from '../scheduleLine';

const createUCCreateScheduleLine = () => scheduleLineInput => {
	const scheduleLine = makeScheduleLine({
		quantity: scheduleLineInput.quantity,
		uom: scheduleLineInput.uom,
		unitPrice: scheduleLineInput.unitPrice,
		totalAmount: scheduleLineInput.totalAmount,
		deliveryDateAndTime: scheduleLineInput.deliveryDateAndTime,
		deliveryStatus: scheduleLineInput.deliveryStatus,
	});

	return scheduleLine;
};

export { createUCCreateScheduleLine };
