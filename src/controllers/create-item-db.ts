import { IDBModel } from '../commons/types';
import { createUCCreateItem } from '../core/';

const createCreateItemDB = (db: IDBModel<any>) => async i => {
  const createItem = createUCCreateItem();
  const newItem = createItem(i);
  return db.insert(newItem);
};

export { createCreateItemDB };
