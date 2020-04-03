import { IDBModel } from '../../commons/types';
import { Supplier, Address } from '../mongo-models';

const supplierModel: IDBModel<any> = {
  insert: async supplier => {
    const newAddress = await new Address({
      building_name: supplier.address.building_name,
      street: supplier.address.street,
      city: supplier.address.city,
      state: supplier.address.state,
      zip_code: supplier.address.zip_code,
    });

    const newAdd: any = await new Promise((resolve, reject) => {
      newAddress.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
    const newSupp = await new Supplier({
      supplierNo: supplier.supplierNo,
      supplierName: supplier.supplierName,
      address: newAdd._id.toString(),
      tin: supplier.tin,
      contactNumber: supplier.contactNumber,
      contactPerson: supplier.contactPerson,
    });

    const newSupplier: any = await new Promise((resolve, reject) => {
      newSupp.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });

    return {
      supplierNo: newSupplier.supplierNo,
      id: newSupplier._id,
      supplierName: newSupplier.supplierName,
      address: newSupplier.address,
      tin: newSupplier.tin,
      contactNumber: newSupplier.contactNumber,
      contactPerson: newSupplier.contactPerson,
    };
  },

  getById: async id => {
    const supp: any = await Supplier.findOne({ _id: id }).exec();
    if (!supp._id) {
      throw new Error('No supplier found');
    }
    return {
      id: supp._id.toString(),
      supplierNo: supp.supplierNo,
      supplierName: supp.supplierName,
      address: supp.address,
      tin: supp.tin,
      contactNumber: supp.contactNumber,
      contactPerson: supp.contactPerson,
    };
  },

  getAll: async () => {
    const supp: any = await Supplier.find({}).exec();
    return supp.map(u => ({
      id: u._id.toString(),
      supplierNo: u.supplierNo,
      supplierName: u.supplierName,
      address: u.address,
      tin: u.tin,
      contactNumber: u.contactNumber,
      contactPerson: u.contactPerson,
    }));
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},

  deleteById: async id => {
    return new Promise((resolve, reject) => {
      Supplier.findByIdAndDelete(id).exec((err, res) => {
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

    const supplier = await Supplier.findByIdAndUpdate(
      {
        _id: data.id,
      },
      setFields,
      {
        new: true,
      },
    ).exec();

    return supplier;
  },

  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

export { supplierModel };
