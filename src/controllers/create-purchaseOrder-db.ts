import { IDBModel } from '../commons/types';
import { createUCPurchaseOrder } from '../core/';

const createCreatePurchaseOrderDB = (db: IDBModel<any>) => async po => {
	const createPurchaseOrder = createUCPurchaseOrder();
	const newPurchaseOrder = createPurchaseOrder(po);
	return db.insert(newPurchaseOrder);
};

export { createCreatePurchaseOrderDB };
