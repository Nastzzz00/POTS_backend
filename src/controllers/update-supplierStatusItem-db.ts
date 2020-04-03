import { IDBModel } from '../commons/types';
import { updateUCSupplierStatusItem } from '../core/_usecases';

const updateSupplierStatusItemByIDDB = (db: IDBModel<any>) => async data => {
  const a = await db.getById(data.id);
  const updateSupplierStatusItem = updateUCSupplierStatusItem();
  const newItem = updateSupplierStatusItem(data, a);
  return db.updateSupplierStatusItemById({ ...newItem, id: data.id });
};

export { updateSupplierStatusItemByIDDB };
