export interface IDBModel<T> {
  insert: (input: any) => PromiseLike<T>;
  getById: (input: any) => PromiseLike<T>;
  //Non-Generic Query Functions
  getAllBySupplierStatus: (input: any) => PromiseLike<T>;
  getAllByItem: (input: any) => PromiseLike<T>;
  getAllByScheduleLine: (input: any) => PromiseLike<T>;
  /////////////////
  getAll: () => PromiseLike<T>;
  deleteById: (input: any) => PromiseLike<T>;
  updateById: (input: any) => PromiseLike<T>;
  //Non-Generic Update Functions
  updateSupplierStatusItemById: (input: any) => PromiseLike<T>;
  updateAdminStatusPurchaseOrderById: (input: any) => PromiseLike<T>;
}
