import { TSupplierStatus } from './../supplierStatus';

export type TScheduleLine = {
	quantity: string;
	unitPrice: string;
	totalAmount: string;
	uom: string;
	deliveryDateAndTime: string;
	deliveryStatus?: [TSupplierStatus] | undefined;
};

const createMakeScheduleLine = () => (scheduleLine): TScheduleLine => {
	const { quantity, uom, deliveryDateAndTime, deliveryStatus, unitPrice, totalAmount } = scheduleLine;
	if (!quantity) {
		throw new Error('Quantity is required.');
	}
	if (!uom) {
		throw new Error('UOM is required.');
	}
	if (!deliveryDateAndTime) {
		throw new Error('Delivery Date and Time is required.');
	}
	if (!unitPrice) {
		throw new Error('Unit Price is required.');
	}
	if (!totalAmount) {
		throw new Error('Total Amount is required.');
	}
	return {
		quantity: quantity,
		uom: uom,
		deliveryDateAndTime: deliveryDateAndTime,
		deliveryStatus: deliveryStatus,
		unitPrice: unitPrice,
		totalAmount: totalAmount,
	};
};

export { createMakeScheduleLine };
