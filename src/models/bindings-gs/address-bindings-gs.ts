import { IDBModel } from '../../commons/types';
import { gsModels } from '../gs-models/models-gs';

const addressGs: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    const models = await gsModels();
    const a = models.vendorAddress.getById(id);

    return {
      building_name: a.vendorAddress,
      street: a.vendorAddress,
      city: a.vendorAddress,
      state: a.vendorAddress,
      zip_code: a.vendorAddress,
      id: a.__metadata.uid,
    };
  },
  getAll: async () => {
    const models = await gsModels();
    console.log('address', models.vendorAddress.getAll());
    const add: Array<any> = models.vendorAddress.getAll().map((a, idx) => {
      return {
        building_name: a.vendorAddress,
        street: a.vendorAddress,
        city: a.vendorAddress,
        state: a.vendorAddress,
        zip_code: a.vendorAddress,
        id: a.__metadata.uid,
      };
    });
    return add;
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
  deleteById: async id => {},
  updateById: async id => {},
};

export { addressGs };
