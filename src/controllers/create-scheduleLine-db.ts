import { IDBModel } from '../commons/types';
import { createUCCreateScheduleLine } from '../core/';

const createCreateScheduleLineDB = (db: IDBModel<any>) => async sl => {
	const createScheduleLine = createUCCreateScheduleLine();
	const newScheduleLine = createScheduleLine(sl);
	return db.insert(newScheduleLine);
};

export { createCreateScheduleLineDB };
