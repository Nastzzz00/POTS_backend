import { updateUCSupplierStatusItem } from './update-item-supplierStatusItem-usecase';
const updateItem = updateUCSupplierStatusItem();

describe('UseCase: Update a Item ', () => {
  it('should be able to update an Item by Supplier Status', () => {
    const itemInput = {
      supplierStatusItem: 'On Transit',
      dateUpdated: '03/03/2020',
      timeUpdated: '4:30 PM',
    };
    const oldItemInput = {
      itemNo: '001',
      description: 'Beef',
      productId: '0001',
      quantity: '10',
      uom: 'kg',
      unitPrice: '1000',
      discount: '10%',
      totalAmount: '9000',
      supplierStatusItem: 'Dispatched',
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
    };
    const newItem = updateItem(itemInput, oldItemInput);
    expect(newItem).toMatchObject(itemInput);
  });
});
