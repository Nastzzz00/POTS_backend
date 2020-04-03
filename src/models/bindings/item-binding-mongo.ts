import { IDBModel } from '../../commons/types';
import moment from 'moment';
import { Item, Address, SupplierStatus, ScheduleLine } from '../mongo-models';

const itemModel: IDBModel<any> = {
  insert: async item => {
    const newAddress = await new Address({
      building_name: item.deliveryAddress.building_name,
      street: item.deliveryAddress.street,
      city: item.deliveryAddress.city,
      state: item.deliveryAddress.state,
      zip_code: item.deliveryAddress.zip_code,
    });

    const newAdd: any = await new Promise((resolve, reject) => {
      newAddress.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });

    const newItem = await new Item({
      itemNo: item.itemNo,
      productId: item.productId,
      description: item.description,
      quantity: item.quantity,
      totalAmount: item.totalAmount,
      uom: item.uom,
      unitPrice: item.unitPrice,
      discount: item.discount,
      deliveryAddress: newAdd._id.toString(),
      supplierStatusItem: item.supplierStatusItem,
      scheduleLine: item.scheduleLine,
      currency: item.currency,
      dateUpdated: item.dateUpdated,
      timeUpdated: item.timeUpdated,
    });

    const newI: any = await new Promise((resolve, reject) => {
      newItem.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });

    return {
      id: newI._id,
      itemNo: newI.itemNo,
      productId: newI.productId,
      description: newI.description,
      quantity: newI.quantity,
      totalAmount: newI.totalAmount,
      uom: newI.uom,
      unitPrice: newI.unitPrice,
      discount: newI.discount,
      deliveryAddress: newI.deliveryAddress,
      supplierStatusItem: newI.supplierStatusItem,
      scheduleLine: newI.scheduleLine || [],
      currency: newI.currency,
      dateUpdated: newI.dateUpdated,
      timeUpdated: newI.timeUpdated,
    };
  },

  getById: async id => {
    const item: any = await Item.findOne({ _id: id }).exec();
    if (!item._id) {
      throw new Error('No item found');
    }
    return {
      id: item._id.toString(),
      productId: item.productId,
      itemNo: item.itemNo,
      description: item.description,
      quantity: item.quantity,
      totalAmount: item.totalAmount,
      uom: item.uom,
      unitPrice: item.unitPrice,
      discount: item.discount,
      deliveryAddress: item.deliveryAddress,
      supplierStatusItem: item.supplierStatusItem,
      scheduleLine: item.scheduleLine,
      currency: item.currency,
      dateUpdated: item.dateUpdated,
      timeUpdated: item.timeUpdated,
    };
  },

  getAll: async () => {
    const item: any = await Item.find({}).exec();
    return item.map(item => ({
      id: item._id.toString(),
      itemNo: item.itemNo,
      productId: item.productId,
      description: item.description,
      quantity: item.quantity,
      totalAmount: item.totalAmount,
      uom: item.uom,
      unitPrice: item.unitPrice,
      discount: item.discount,
      deliveryAddress: item.deliveryAddress,
      supplierStatusItem: item.supplierStatusItem,
      scheduleLine: item.scheduleLine,
      currency: item.currency,
      dateUpdated: item.dateUpdated,
      timeUpdated: item.timeUpdated,
    }));
  },

  getAllByItem: async data => {},

  getAllByScheduleLine: async data => {
    const scheduleLine: any = await ScheduleLine.find({
      _id: { $in: data },
    }).exec();

    return scheduleLine.map(sl => ({
      id: sl._id.toString(),
      quantity: sl.quantity,
      uom: sl.uom,
      deliveryDateAndTime: sl.deliveryDateAndTime,
      totalAmount: sl.totalAmount,
      unitPrice: sl.unitPrice,
      deliveryStatus: sl.deliveryStatus,
    }));
  },

  getAllBySupplierStatus: async data => {},

  deleteById: async id => {
    return new Promise((resolve, reject) => {
      Item.findByIdAndDelete(id).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },

  updateById: async data => {
    let setFields = {
      ...data,
      dateUpdated: moment().format('YYYY-MM-DD'),
      timeUpdated: moment().format('LTS'),
    };
    for (let prop in setFields) {
      if (setFields[prop] == undefined) {
        delete setFields[prop];
      }
    }

    const item: any = await Item.findByIdAndUpdate(
      {
        _id: data.id,
      },
      setFields,
      {
        new: true,
      },
    ).exec();
    return {
      id: item._id.toString(),
      productId: item.productId,
      itemNo: item.itemNo,
      description: item.description,
      quantity: item.quantity,
      totalAmount: item.totalAmount,
      uom: item.uom,
      unitPrice: item.unitPrice,
      discount: item.discount,
      deliveryAddress: item.deliveryAddress,
      supplierStatusItem: item.supplierStatusItem,
      scheduleLine: item.scheduleLine,
      currency: item.currency,
      dateUpdated: item.dateUpdated,
      timeUpdated: item.timeUpdated,
    };
  },

  updateSupplierStatusItemById: async data => {
    let setFields = {
      ...data,
      dateUpdated: moment().format('YYYY-MM-DD'),
      timeUpdated: moment().format('LTS'),
    };
    for (let prop in setFields) {
      if (setFields[prop] == undefined) {
        delete setFields[prop];
      }
    }

    const item: any = await Item.findByIdAndUpdate(
      {
        _id: data.id,
      },
      setFields,
      {
        new: true,
      },
    ).exec();
    return {
      id: item._id.toString(),
      productId: item.productId,
      itemNo: item.itemNo,
      description: item.description,
      quantity: item.quantity,
      totalAmount: item.totalAmount,
      uom: item.uom,
      unitPrice: item.unitPrice,
      discount: item.discount,
      deliveryAddress: item.deliveryAddress,
      supplierStatusItem: item.supplierStatusItem,
      scheduleLine: item.scheduleLine,
      currency: item.currency,
      dateUpdated: item.dateUpdated,
      timeUpdated: item.timeUpdated,
    };
  },

  updateAdminStatusPurchaseOrderById: async id => {},
};

export { itemModel };
