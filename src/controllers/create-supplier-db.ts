import { IDBModel } from '../commons/types';
import { createUCCreateSupplier } from '../core/';

const createCreateSupplierDB = (db: IDBModel<any>) => async u => {
	const createSupplier = createUCCreateSupplier();
	const newSupplier = createSupplier(u);
	return db.insert(newSupplier);
};

export { createCreateSupplierDB };
