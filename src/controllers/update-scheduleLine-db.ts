import { IDBModel } from '../commons/types';
import { updateUCScheduleLine } from '../core/_usecases';

const updateScheduleLineByIDDB = (db: IDBModel<any>) => async data => {
	const a = await db.getById(data.id);
	const updateScheduleLine = updateUCScheduleLine();
	const newScheduleLine = updateScheduleLine(data, a);
	return db.updateById({ ...newScheduleLine, id: data.id });
};

export { updateScheduleLineByIDDB };
