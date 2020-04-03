import { IDBModel } from '../../commons/types';
import moment from 'moment';
import { SupplierStatus } from '../mongo-models';

const supplierStatusModel: IDBModel<any> = {
  insert: async supplierStatus => {
    const newSupplierStatus = await new SupplierStatus({
      status: supplierStatus.status,
      dateCreated: moment().format('YYYY-MM-DD'),
      timeCreated: moment().format('LTS'),
    });
    return new Promise((resolve, reject) => {
      newSupplierStatus.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },

  getById: async data => {
    const supplierStatus: any = await SupplierStatus.findOne({
      _id: data,
    }).exec();
    if (!supplierStatus._id) {
      throw new Error('No supplierStatus found');
    }
    return {
      id: supplierStatus._id.toString(),
      status: supplierStatus.status,
      dateCreated: supplierStatus.dateCreated,
      timeCreated: supplierStatus.timeCreated,
    };
  },

  getAll: async () => {
    const supplierStatus: any = await SupplierStatus.find({}).exec();

    return supplierStatus.map(ss => ({
      id: ss._id.toString(),
      status: ss.status,
      dateCreated: ss.dateCreated,
      timeCreated: ss.timeCreated,
    }));
  },

  getAllByItem: async data => {},
  getAllBySupplierStatus: async data => {},
  getAllByScheduleLine: async data => {},

  deleteById: async data => {
    return new Promise((resolve, reject) => {
      SupplierStatus.findByIdAndDelete(data).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },

  updateById: async data => {
    const supplierStatus: any = await SupplierStatus.findByIdAndUpdate(
      {
        _id: data.id,
      },
      {
        status: data.status,
        dateCreated: moment().format('YYYY-MM-DD'),
        timeCreated: moment().format('LTS'),
      },
      {
        new: true,
      },
    ).exec();
    return {
      id: supplierStatus._id,
      status: supplierStatus.status,
      dateCreated: supplierStatus.dateCreated,
      timeCreated: supplierStatus.timeCreated,
    };
  },

  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

export { supplierStatusModel };
