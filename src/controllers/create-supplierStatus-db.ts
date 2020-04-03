import { IDBModel } from '../commons/types';
import { createUCCreateSupplierStatus } from '../core/';

const createCreateSupplierStatusDB = (db: IDBModel<any>) => async u => {
	const createSupplierStatus = createUCCreateSupplierStatus();
	const newSupplierStatus = createSupplierStatus(u);
	return db.insert(newSupplierStatus);
};

export { createCreateSupplierStatusDB };
