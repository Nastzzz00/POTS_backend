import { updateSupplierStatusItemByIDDB } from './update-supplierStatusItem-db';

const mockItem = [
  {
    _id: '1',
    itemNo: '001',
    description: 'Beef',
    productId: '0001',
    quantity: '10',
    uom: 'kg',
    unitPrice: '1000',
    discount: '10%',
    totalAmount: '9000',
    supplierStatusItem: 'Distpatched',
    deliveryAddress: {
      building_name: '002',
      street: 'Elmer',
      city: 'Celadon',
      state: 'Johto',
      zip_code: '123',
    },
    scheduleLine: {
      quantity: '',
      uom: 'uom',
      deliveryDate: 'deliveryDate',
      supplerStatus: 'supplerStatus',
    },
    currency: 'currency',
    dateUpdated: '',
    timeUpdated: '',
  },
  {
    _id: '2',
    itemNo: '002',
    description: 'Beef',
    productId: '0001',
    quantity: '10',
    uom: 'kg',
    unitPrice: '1000',
    discount: '10%',
    totalAmount: '9000',
    supplierStatusItem: 'Distpatched',
    deliveryAddress: {
      building_name: '002',
      street: 'Elmer',
      city: 'Celadon',
      state: 'Johto',
      zip_code: '123',
    },
    scheduleLine: {
      quantity: '',
      uom: 'uom',
      deliveryDate: 'deliveryDate',
      supplerStatus: 'supplerStatus',
    },
    currency: 'currency',
    dateUpdated: '',
    timeUpdated: '',
  },
];

describe('Update Item', () => {
  const mockDb: any = {
    updateSupplierStatusItemById: jest.fn(async input => {
      return { ...input };
    }),
    getById: jest.fn(async id => {
      const filterMock = data => {
        if (data._id === id) {
          return data;
        }
      };

      return mockItem.filter(filterMock);
    }),
  };
  const updatesupplierStatusItem = updateSupplierStatusItemByIDDB(mockDb);

  it('should be able to update an item in the DB', async () => {
    const given = {
      itemNo: '001',
      description: 'Beefs',
      productId: '0001',
      quantity: '10',
      uom: 'kg',
      unitPrice: '1000',
      discount: '10%',
      totalAmount: '9000',
      supplierStatusItem: 'Distpatched',
      deliveryAddress: {
        building_name: '002',
        street: 'Elmer',
        city: 'Celadon',
        state: 'Johto',
        zip_code: '123',
      },
      scheduleLine: {
        quantity: '',
        uom: 'uom',
        deliveryDate: 'deliveryDate',
        supplerStatus: 'supplerStatus',
      },
      currency: 'currency',
      dateUpdated: '03/03/2020',
      timeUpdated: '4:30 PM',
    };

    const newData = await updatesupplierStatusItem(given);

    expect(mockDb.getById.mock.calls.length).toBe(1);
    expect(mockDb.updateSupplierStatusItemById.mock.calls.length).toBe(1);
    expect(newData).toMatchObject(given);
  });
});
