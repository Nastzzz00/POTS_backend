import { IDBModel } from '../commons/types';
import { updateUCItem } from '../core/_usecases';

const updateItemByIDDB = (db: IDBModel<any>) => async data => {
	const a = await db.getById(data.id);
	const updateItem = updateUCItem();
	const newItem = updateItem(data, a);
	return db.updateById({ ...newItem, id: data.id });
};

export { updateItemByIDDB };
