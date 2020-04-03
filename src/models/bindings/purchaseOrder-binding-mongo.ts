import { IDBModel } from '../../commons/types';
import {
  PurchaseOrder,
  Address,
  Item,
  ScheduleLine,
  SupplierStatus,
} from '../mongo-models';

const purchaseOrderModel: IDBModel<any> = {
  insert: async purchaseOrder => {
    const newAddress = await new Address({
      building_name: purchaseOrder.vendorAddress.building_name,
      street: purchaseOrder.vendorAddress.street,
      city: purchaseOrder.vendorAddress.city,
      state: purchaseOrder.vendorAddress.state,
      zip_code: purchaseOrder.vendorAddress.zip_code,
    });

    const newAdd: any = await new Promise((resolve, reject) => {
      newAddress.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });

    const newPo = await new PurchaseOrder({
      purchaseOrderNo: purchaseOrder.purchaseOrderNo,
      shipmentNo: purchaseOrder.shipmentNo,
      adminStatus: purchaseOrder.adminStatus,
      supplierStatusHeader: purchaseOrder.supplierStatusHeader,
      vendorAddress: newAdd._id.toString(),
      postingDate: purchaseOrder.postingDate,
      documentDate: purchaseOrder.documentDate,
      supplier: purchaseOrder.supplier,
      items: purchaseOrder.items,
    });

    const newPurchaseOrder: any = await new Promise((resolve, reject) => {
      newPo.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });

    return {
      id: newPurchaseOrder._id,
      purchaseOrderNo: newPurchaseOrder.purchaseOrderNo,
      shipmentNo: newPurchaseOrder.shipmentNo,
      adminStatus: newPurchaseOrder.adminStatus,
      supplierStatusHeader: newPurchaseOrder.supplierStatusHeader,
      vendorAddress: newPurchaseOrder.vendorAddress,
      documentDate: newPurchaseOrder.documentDate,
      purchaseOrder: newPurchaseOrder.postingDate,
      supplier: newPurchaseOrder.supplier,
      items: newPurchaseOrder.items,
    };
  },
  getAll: async () => {
    const po: any = await PurchaseOrder.find({}).exec();

    return po.map(u => ({
      id: u._id.toString(),
      purchaseOrderNo: u.purchaseOrderNo,
      shipmentNo: u.shipmentNo,
      adminStatus: u.adminStatus,
      supplierStatusHeader: u.supplierStatusHeader,
      vendorAddress: u.vendorAddress,
      postingDate: u.postingDate,
      documentDate: u.documentDate,
      supplier: u.supplier,
      items: u.items,
    }));
  },

  getById: async id => {
    const u: any = await PurchaseOrder.findOne({ _id: id }).exec();

    return {
      id: u._id.toString(),
      purchaseOrderNo: u.purchaseOrderNo,
      shipmentNo: u.shipmentNo,
      adminStatus: u.adminStatus,
      supplierStatusHeader: u.supplierStatusHeader,
      vendorAddress: u.vendorAddress,
      postingDate: u.postingDate,
      documentDate: u.documentDate,
      supplier: u.supplier,
      items: u.items,
    };
  },

  getAllByItem: async data => {
    const item: any = await Item.find({ _id: { $in: data } }).exec();
    return item.map(i => ({
      id: i._id.toString(),
      itemNo: i.itemNo,
      productId: i.productId,
      description: i.description,
      quantity: i.quantity,
      totalAmount: i.totalAmount,
      uom: i.uom,
      unitPrice: i.unitPrice,
      discount: i.discount,
      deliveryAddress: i.deliveryAddress,
      supplierStatusItem: i.supplierStatusItem,
      scheduleLine: i.scheduleLine,
      currency: i.currency,
      dateUpdated: i.dateUpdated,
      timeUpdated: i.timeUpdated,
    }));
  },

  getAllByScheduleLine: async data => {},

  getAllBySupplierStatus: async data => {},

  deleteById: async id => {
    return new Promise((resolve, reject) => {
      PurchaseOrder.findByIdAndDelete(id).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },

  updateById: async data => {
    let setFields = {
      ...data,
    };
    for (let prop in setFields) {
      if (setFields[prop] == undefined) {
        delete setFields[prop];
      }
    }
    const purchaseOrder = await PurchaseOrder.findByIdAndUpdate(
      {
        _id: data.id,
      },
      setFields,
      {
        new: true,
      },
    ).exec();

    return purchaseOrder;
  },

  updateAdminStatusPurchaseOrderById: async data => {
    let setFields = {
      ...data,
    };
    for (let prop in setFields) {
      if (setFields[prop] == undefined) {
        delete setFields[prop];
      }
    }
    const purchaseOrder = await PurchaseOrder.findByIdAndUpdate(
      {
        _id: data.id,
      },
      setFields,
      {
        new: true,
      },
    ).exec();

    return purchaseOrder;
  },

  updateSupplierStatusItemById: async id => {},
};

export { purchaseOrderModel };
