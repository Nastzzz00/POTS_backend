import { IDBModel } from '../commons/types';
import { updateUCPurchaseOrder } from '../core/_usecases';

const updatePurchaseOrderByIDDB = (db: IDBModel<any>) => async data => {
  const a = await db.getById(data.id);
  const updatePurchaseOrder = updateUCPurchaseOrder();
  const newPurchaseOrder = updatePurchaseOrder(data, a);
  return db.updateById({ ...newPurchaseOrder, id: data.id });
};

export { updatePurchaseOrderByIDDB };
