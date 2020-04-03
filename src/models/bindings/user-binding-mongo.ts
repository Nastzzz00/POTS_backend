import { IDBModel } from '../../commons/types';
import { User } from '../mongo-models';

const userModel: IDBModel<any> = {
  insert: async user => {
    const newUser = await new User({
      userId: user.userId,
      userName: user.userName,
      password: user.password,
      userLevel: user.userLevel,
    });

    return new Promise((resolve, reject) => {
      newUser.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },

  getById: async id => {
    const user: any = await User.findOne({ _id: id }).exec();
    if (!user._id) {
      throw new Error('No user found');
    }
    return {
      id: user._id.toString(),
      userId: user.userId,
      userName: user.userName,
      password: user.password,
      userLevel: user.userLevel,
    };
  },
  getAll: async () => {
    const users: any = await User.find({}).exec();

    return users.map(u => ({
      id: u._id.toString(),
      userId: u.userId,
      userName: u.userName,
      password: u.password,
      userLevel: u.userLevel,
    }));
  },

  deleteById: async data => {
    return new Promise((resolve, reject) => {
      User.findByIdAndDelete(data).exec((err, res) => {
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

    const user: any = await User.findByIdAndUpdate(
      {
        _id: data.id,
      },
      setFields,
      {
        new: true,
      },
    ).exec();
    return {
      id: user._id.toString(),
      userId: user.userId,
      userName: user.userName,
      password: user.password,
      userLevel: user.userLevel,
    };
  },

  getAllByItem: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByScheduleLine: async data => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

export { userModel };
