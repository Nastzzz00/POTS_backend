import { IDBModel } from '../commons/types';

const getAllDataDB = (db: IDBModel<any>) => async () => {
	return db.getAll();
};
const getByIDDB = (db: IDBModel<any>) => async id => {
	return db.getById(id);
};

const getAllBySupplierStatusDB = (db: IDBModel<any>) => async id => {
	return db.getAllBySupplierStatus(id);
};

const getAllByItemDB = (db: IDBModel<any>) => async id => {
	return db.getAllByItem(id);
};

const getAllByScheduleLineDB = (db: IDBModel<any>) => async id => {
	return db.getAllByScheduleLine(id);
};

export { getAllDataDB, getByIDDB, getAllByItemDB, getAllBySupplierStatusDB, getAllByScheduleLineDB };
