import { IDBModel } from '../commons/types';
import { updateUCUser } from '../core/_usecases';

const updateUserByIDDB = (db: IDBModel<any>) => async data => {
	const a = await db.getById(data.id);
	const updateUser = updateUCUser();
	const newUser = updateUser(data, a);
	return db.updateById(newUser);
};

export { updateUserByIDDB };
