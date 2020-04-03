import { IDBModel } from '../commons/types';
import { updateUCSupplierStatus } from '../core/_usecases';

const updateSupplierStatusByIDDB = (db: IDBModel<any>) => async data => {
	const a = await db.getById(data.id);
	const updateSupplierStatus = updateUCSupplierStatus();
	const newSupplierStatus = updateSupplierStatus(data, a);
	return db.updateById({ ...newSupplierStatus, id: data.id });
};

export { updateSupplierStatusByIDDB };
