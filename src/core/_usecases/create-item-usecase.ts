import { makeItem } from '../item';

const createUCCreateItem = () => itemInput => {
	const item = makeItem({
		itemNo: itemInput.itemNo,
		productId: itemInput.productId,
		description: itemInput.description,
		quantity: itemInput.quantity,
		totalAmount: itemInput.totalAmount,
		discount: itemInput.discount,
		uom: itemInput.uom,
		unitPrice: itemInput.unitPrice,
		deliveryAddress: itemInput.deliveryAddress,
		supplierStatusItem: itemInput.supplierStatusItem,
		currency: itemInput.currency,
		scheduleLine: itemInput.scheduleLine,
		dateUpdated: itemInput.dateUpdated,
		timeUpdated: itemInput.timeUpdated,
	});

	return item;
};

export { createUCCreateItem };
