import { createMakeScheduleLine } from './scheduleLine';

const makeScheduleLine = createMakeScheduleLine();

describe('Schedule Line', () => {
	it('must have quantity', () => {
		const scheduleLine = {
			quantity: '',
			uom: 'uom',
			deliveryDateAndTime: 'deliveryDate',
			unitPrice: 'unitPrice',
			totalAmount: 'totalAmount',
			deliveryStatus: 'supplerStatus',
		};
		expect(() => makeScheduleLine(scheduleLine)).toThrow('Quantity is required.');
	});

	it('must have uom', () => {
		const scheduleLine = {
			quantity: 'quantity',
			uom: '',
			deliveryDateAndTime: 'deliveryDate',
			unitPrice: 'unitPrice',
			totalAmount: 'totalAmount',
			deliveryStatus: 'supplerStatus',
		};
		expect(() => makeScheduleLine(scheduleLine)).toThrow('UOM is required.');
	});

	it('must have deliveryDate', () => {
		const scheduleLine = {
			quantity: 'quantity',
			uom: 'uom',
			deliveryDateAndTime: '',
			unitPrice: 'unitPrice',
			totalAmount: 'totalAmount',
			deliveryStatus: 'supplerStatus',
		};
		expect(() => makeScheduleLine(scheduleLine)).toThrow('Delivery Date and Time is required.');
	});

	it('must have unitPice', () => {
		const scheduleLine = {
			quantity: 'quantity',
			uom: 'uom',
			deliveryDateAndTime: 'dateandtime',
			unitPrice: '',
			totalAmount: 'totalAmount',
			deliveryStatus: 'supplerStatus',
		};
		expect(() => makeScheduleLine(scheduleLine)).toThrow('Unit Price is required.');
	});

	it('must have totalAmount', () => {
		const scheduleLine = {
			quantity: 'quantity',
			uom: 'uom',
			deliveryDateAndTime: 'dateandtime',
			unitPrice: 'unitPrice',
			totalAmount: '',
			deliveryStatus: 'supplerStatus',
		};
		expect(() => makeScheduleLine(scheduleLine)).toThrow('Total Amount is required.');
	});

	// it('will return the item', () => {
	// 	//givens
	// 	const scheduleLineInput = {
	// 		quantity: 'quantity',
	// 		uom: 'uom',
	// 		deliveryDate: '',
	// 		supplerStatus: 'supplerStatus',
	// 	};
	// 	const a = makeScheduleLine(scheduleLineInput);
	// 	expect(a).toMatchObject(scheduleLineInput);
	// });
});
