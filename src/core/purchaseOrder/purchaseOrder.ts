import { TItem } from './../item';

export type TPurchaseOrder = {
	// id?: string;
	purchaseOrderNo: string;
	shipmentNo: string;
	adminStatus: string | undefined;
	supplierStatusHeader: string | undefined;
	supplier: string;
	vendorAddress: string;
	documentDate: string | undefined;
	postingDate: string | undefined;
	items: [TItem] | undefined;
};

const createMakePurchaseOrder = () => ({
	purchaseOrderNo,
	shipmentNo,
	adminStatus,
	supplierStatusHeader,
	supplier,
	vendorAddress,
	documentDate,
	items,
	postingDate,
}): TPurchaseOrder => {
	if (!purchaseOrderNo) {
		throw new Error('Purchase Order Number is required');
	}
	if (!shipmentNo) {
		throw new Error('Shipment Number is required');
	}
	if (!supplier) {
		throw new Error('Supplier is required');
	}
	if (!items) {
		throw new Error('Item/s is/are required');
	}
	if (!vendorAddress) {
		throw new Error('Vendor Address is required');
	}

	return {
		purchaseOrderNo: purchaseOrderNo,
		shipmentNo: shipmentNo,
		adminStatus: adminStatus,
		supplierStatusHeader: supplierStatusHeader,
		vendorAddress: vendorAddress,
		documentDate: documentDate,
		postingDate: postingDate,
		supplier: supplier,
		items: items,
	};
};

export { createMakePurchaseOrder };
