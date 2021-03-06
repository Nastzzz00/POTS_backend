export default {
  users: [
    {
      _id: '1',
      userId: '001',
      userName: 'User Name1',
      password: '12345',
      userLevel: 'Admin',
    },
    {
      _id: '2',
      userId: '002',
      userName: 'User Name2',
      password: '12345',
      userLevel: 'Supplier',
    },
  ],

  address: [
    {
      id: 'A1',
      building_name: '002',
      street: 'Elmer',
      city: 'Celadon',
      state: 'Johto',
      zip_code: '123',
    },
    {
      id: 'A2',
      building_name: '002',
      street: 'Elmer',
      city: 'Celadon',
      state: 'Johto',
      zip_code: '123',
    },
  ],

  suppliers: [
    {
      id: '1',
      supplierNo: '001',
      supplierName: 'Juan Dela Cruz',
      address: 'A2',
      contactPerson: 'Basil Valdez',
      contactNumber: '1234567',
      tin: '12345',
    },
    {
      id: '2',
      supplierNo: '002',
      supplierName: 'Juan Dela Cruz',
      address: 'A1',
      contactPerson: 'Basil Valdez',
      contactNumber: '1234567',
      tin: '12345',
    },
  ],

  supplierStatus: [
    {
      _id: '1',
      status: 'Dispatched',
      dateCreated: 'February 14, 2020',
      timeCreated: '4:30 PM',
    },
    {
      _id: '2',
      status: 'Delivered',
      dateCreated: 'February 14, 2020',
      timeCreated: '4:30 PM',
    },
  ],

  scheduleLines: [
    {
      _id: '1',
      quantity: 10,
      uom: 'kilograms',
      deliveryDateAndTime: 'February 25,2020 4:30PM',
      unitPrice: 1000,
      totalAmount: 10000,
      deliveryStatus: [''],
    },
    {
      _id: '2',
      quantity: 10,
      uom: 'kilograms',
      deliveryDateAndTime: 'February 25,2020 4:30PM',
      unitPrice: 1000,
      totalAmount: 10000,
      deliveryStatus: '2',
    },
  ],

  items: [
    {
      id: '1',
      itemNo: '001',
      description: 'Beef',
      productId: '0001',
      quantity: 10,
      uom: 'kilograms',
      unitPrice: 1000,
      discount: 0.05,
      totalAmount: 10000,
      deliveryAddress: 'A1',
      scheduleLine: '1',
      currency: 'PHP',
      dateUpdated: '',
      timeUpdated: '',
    },
    {
      id: '2',
      itemNo: '001',
      description: 'Beef',
      productId: '0001',
      quantity: 10,
      uom: 'kilograms',
      unitPrice: 1000,
      discount: 0.05,
      totalAmount: 10000,
      deliveryAddress: 'A1',
      scheduleLine: '2',
      currency: 'PHP',
    },
  ],

  purchaseOrders: [
    {
      id: '1',
      purchaseOrderNo: '001',
      adminStatus: 'Pending',
      supplierStatusHeader: 'Pending',
      shipmentNo: '123',
      supplier: '1',
      postingDate: '03/03/20200',
      documentDate: '03/03/20200',
      vendorAddress: 'A1',
      items: '2',
      // items: [
      //   {
      //     id: '1',
      //     itemNo: '001',
      //     description: 'Beef',
      //     productId: '0001',
      //     quantity: 10,
      //     uom: 'kilograms',
      //     unitPrice: 1000,
      //     discount: 0.05,
      //     totalAmount: 10000,
      //     deliveryAddress: 'A1',
      //     scheduleLine: '2',
      //     currency: 'PHP',
      //   },
      // ],
    },
  ],
};
