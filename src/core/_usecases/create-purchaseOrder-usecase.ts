import { makePurchaseOrder } from '../purchaseOrder';

const createUCPurchaseOrder = () => purchaseOrderInput => {
	const purchaseOrder = makePurchaseOrder({
		purchaseOrderNo: purchaseOrderInput.purchaseOrderNo,
		shipmentNo: purchaseOrderInput.shipmentNo,
		adminStatus: purchaseOrderInput.adminStatus,
		supplierStatusHeader: purchaseOrderInput.supplierStatusHeader,
		vendorAddress: purchaseOrderInput.vendorAddress,
		documentDate: purchaseOrderInput.documentDate,
		postingDate: purchaseOrderInput.postingDate,
		supplier: purchaseOrderInput.supplier,
		items: purchaseOrderInput.items,
	});

	return purchaseOrder;
};

export { createUCPurchaseOrder };
