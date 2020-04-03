import { IDBModel } from "../commons/types";

const DeleteRecordByIDDB = (db: IDBModel<any>) => async id => {
  return db.deleteById(id);
};

export { DeleteRecordByIDDB };
