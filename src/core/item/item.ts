import { TScheduleLine } from './../scheduleLine';

export type TItem = {
	itemNo: string;
	productId: string;
	description: string;
	quantity: string;
	uom: string;
	unitPrice: string;
	discount?: string;
	totalAmount: string;
	deliveryAddress: string;
	supplierStatusItem?: string;
	scheduleLine: [TScheduleLine];
	currency: string;
	dateUpdated?: string;
	timeUpdated?: string;
};

const createMakeItem = () => (item): TItem => {
	const {
		itemNo,
		description,
		productId,
		quantity,
		uom,
		unitPrice,
		totalAmount,
		discount,
		deliveryAddress,
		scheduleLine,
		supplierStatusItem,
		currency,
		dateUpdated,
		timeUpdated,
	} = item;

	if (!itemNo) {
		throw new Error('Item Number is required.');
	}
	if (!productId) {
		throw new Error('Product ID is required.');
	}
	if (!description) {
		throw new Error('Description is required.');
	}
	if (!quantity) {
		throw new Error('Quantity is required.');
	}
	if (!uom) {
		throw new Error('UOM is required.');
	}
	if (!unitPrice) {
		throw new Error('Unit Price is required.');
	}
	if (!totalAmount) {
		throw new Error('Total Amount is required.');
	}
	if (!deliveryAddress) {
		throw new Error('Delivery Address is required.');
	}
	if (!scheduleLine) {
		throw new Error('Schedule Line is required.');
	}
	if (!currency) {
		throw new Error('Currency is required.');
	}

	return {
		itemNo: itemNo,
		productId: productId,
		description: description,
		quantity: quantity,
		totalAmount: totalAmount,
		discount: discount,
		uom: uom,
		unitPrice: unitPrice,
		deliveryAddress: deliveryAddress,
		supplierStatusItem: supplierStatusItem,
		scheduleLine: scheduleLine,
		currency: currency,
		dateUpdated: dateUpdated,
		timeUpdated: timeUpdated,
	};
};

export { createMakeItem };
