import { updateUCAdminStatus } from './update-adminStatus-usecase';

const updateAdminStatus = updateUCAdminStatus();

describe('UseCase: Update a admin status ', () => {
  it('should be able to update a admin status', () => {
    const purchaseOrderInput = {
      supplierStatusHeader: 'supplierStatus',
    };

    const oldValue = {
      purchaseOrderNo: '001',
      shipmentNo: '123',
      adminStatus: 'status',
      supplierStatusHeader: '',
      supplier: {
        supplierNo: '001',
        supplierName: 'Juan Dela Cruz',
        address: {
          building_name: '002',
          street: 'Elmer',
          city: 'Celadon',
          state: 'Johto',
          zip_code: '123',
        },
        contactPerson: 'Basil Valdez',
        contactNumber: '1234567',
        tin: '12345',
      },
      postingDate: '03/03/20200',
      documentDate: '03/03/20200',
      vendorAddress: {
        building_name: '002',
        street: 'Elmer',
        city: 'Celadon',
        state: 'Johto',
        zip_code: '123',
      },
      items: [
        {
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
          scheduleLine: '',
          currency: 'currency',
          dateUpdated: '',
          timeUpdated: '',
        },
      ],
    };
    const newPurchaseOrder = updateAdminStatus(purchaseOrderInput, oldValue);
    expect(newPurchaseOrder).toMatchObject(purchaseOrderInput);
  });
});
