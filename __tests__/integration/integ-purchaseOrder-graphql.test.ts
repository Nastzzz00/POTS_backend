import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import mockData from '../mocks/mock-data';
import * as controllers from '../../src/controllers';
import { constructTestServer } from '../__utils';

const {
  getAllDataDB,
  getByIDDB,
  DeleteRecordByIDDB,
  getAllByItemDB,
  createCreatePurchaseOrderDB,
  createCreateItemDB,
  createCreateSupplierDB,
  createCreateScheduleLineDB,
  updatePurchaseOrderByIDDB,
  getAllByScheduleLineDB,
  getAllBySupplierStatusDB,
  createCreateSupplierStatusDB,
  updateAdminStatusByIDDB,
} = controllers;

const purchaseOrderMock = {
  insert: jest.fn(async input => {
    return { id: '1', ...input, vendorAddress: 'A1', supplier: '1' };
  }),
  getById: jest.fn(async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.purchaseOrders.filter(filterData);

    return res[0] || null;
  }),
  getAll: jest.fn(async () => {
    return mockData.purchaseOrders;
  }),
  updateById: jest.fn(async input => {
    return { ...input };
  }),
  deleteById: async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.purchaseOrders.filter(filterData);
    return res[0] || null;
  },

  getAllBySupplierStatus: async id => {},
  getAllByItem: jest.fn(async ids => {
    const filteredData = mockData.items.filter(item => {
      return ids.includes(item.id);
    });
    return filteredData;
  }),
  updateAdminStatusPurchaseOrderById: async input => {
    return { ...input };
  },
  getAllByScheduleLine: async id => {},
  updateSupplierStatusItemById: async id => {},
};

const itemMock = {
  insert: jest.fn(async input => {
    return {
      id: '2',
      ...input,
      deliveryAddress: 'A1',
    };
  }),
  getById: jest.fn(async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.items.filter(filterData);

    return res[0] || null;
  }),
  getAll: jest.fn(async () => {
    return mockData.items;
  }),
  updateById: jest.fn(async input => {
    return { ...input };
  }),
  deleteById: async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.items.filter(filterData);
    return res[0] || null;
  },
  getAllBySupplierStatus: async id => {},
  getAllByItem: async id => {},
  getAllByScheduleLine: jest.fn(async id => {
    const filterData = data => {
      if (id.includes(data._id)) {
        return data;
      }
    };
    const res = mockData.scheduleLines
      .filter(filterData)
      .map(data => ({ ...data, id: data._id }));
    return res;
  }),
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

const supplierMock = {
  insert: jest.fn(async input => {
    return { id: '1', ...input, address: 'A2' };
  }),
  getAll: jest.fn(async () => {
    return mockData.suppliers;
  }),
  getById: jest.fn(async id => {
    const filterData = cust => {
      if (cust.id === id) {
        return cust;
      }
    };

    const res = mockData.suppliers.filter(filterData);
    return res[0] || null;
  }),

  deleteById: async id => {
    const filterData = cust => {
      if (cust.id === id) {
        return cust;
      }
    };

    const res = mockData.suppliers.filter(filterData);
    return res[0] || null;
  },

  updateById: jest.fn(async input => {
    return { ...input };
  }),
  getAllBySupplierStatus: async id => {},
  getAllByItem: async id => {},
  getAllByScheduleLine: async id => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

const scheduleLinesMock = {
  insert: jest.fn(async input => {
    return { id: '2', ...input };
  }),
  getById: jest.fn(async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.scheduleLines.filter(filterData);

    return res[0] || null;
  }),
  getAll: jest.fn(async () => {
    return mockData.scheduleLines;
  }),
  updateById: jest.fn(async input => {
    return { ...input };
  }),
  deleteById: async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.scheduleLines.filter(filterData);
    return res[0] || null;
  },
  getAllBySupplierStatus: jest.fn(async id => {
    const filterData = data => {
      if (id.includes(data._id)) {
        return data;
      }
    };
    const res = mockData.supplierStatus
      .filter(filterData)
      .map(data => ({ ...data, id: data._id }));
    return res;
  }),
  getAllByItem: async id => {},
  getAllByScheduleLine: async id => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

const addressMock = {
  insert: jest.fn(async input => {
    return { id: 'A1', ...input };
  }),
  getAll: jest.fn(async () => {
    return mockData.address;
  }),
  getById: jest.fn(async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.address.filter(filterData);
    return res[0] || null;
  }),
  deleteById: async id => {},
  updateById: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByItem: async id => {},
  getAllByScheduleLine: async id => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

const supplierStatusMock = {
  insert: jest.fn(async input => {
    return { id: '2', ...input };
  }),
  getById: jest.fn(async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.supplierStatus.filter(filterData);

    return res[0] || null;
  }),
  getAll: jest.fn(async () => {
    return mockData.supplierStatus;
  }),
  updateById: jest.fn(async input => {
    return { ...input };
  }),
  deleteById: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByItem: async id => {},
  getAllByScheduleLine: async id => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

const { server }: any = constructTestServer({
  context: {
    createPurchaseOrder: createCreatePurchaseOrderDB(purchaseOrderMock),
    updatePurchaseOrderById: updatePurchaseOrderByIDDB(purchaseOrderMock),
    deletePurchaseOrderbyId: DeleteRecordByIDDB(purchaseOrderMock),
    getPurchaseOrderById: getByIDDB(purchaseOrderMock),
    getAllPurchaseOrders: getAllDataDB(purchaseOrderMock),
    getAllItemsByPurchaseOrder: getAllByItemDB(purchaseOrderMock),
    createScheduleLine: createCreateScheduleLineDB(scheduleLinesMock),
    getAddressById: getByIDDB(addressMock),
    createItem: createCreateItemDB(itemMock),
    createSupplier: createCreateSupplierDB(supplierMock),
    getSupplierById: getByIDDB(supplierMock),
    getAllScheduleLinesByItem: getAllByScheduleLineDB(itemMock),
    getAllSupplierStatusByScheduleLine: getAllBySupplierStatusDB(
      scheduleLinesMock,
    ),
    createSupplierStatus: createCreateSupplierStatusDB(supplierStatusMock),
    updateAdminStatusById: updateAdminStatusByIDDB(purchaseOrderMock),
  },
});

describe('Tests', () => {
  //Queries
  it('should fetch all purchase orders admin persona', async () => {
    const PURCHASEORDER_ALL = gql`
      query {
        allPurchaseOrders {
          id
          purchaseOrderNo
          shipmentNo
          adminStatus
          supplierStatusHeader
          vendorAddress {
            id
            building_name
            street
            city
            state
            zip_code
          }
          supplier {
            id
            supplierNo
            supplierName
            tin
            contactNumber
            contactPerson
            address {
              id
              building_name
              street
              city
              state
              zip_code
            }
          }
          documentDate
          items {
            id
            itemNo
            description
            quantity
            uom
            unitPrice
            currency
            deliveryAddress {
              id
              building_name
              street
              city
              state
              zip_code
            }
            totalAmount
            supplierStatusItem
            scheduleLine {
              id
              quantity
              uom
              unitPrice
              totalAmount
              deliveryDateAndTime
              deliveryStatus {
                id
                status
                dateCreated
                timeCreated
              }
            }
          }
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({ query: PURCHASEORDER_ALL });

    expect(res).toMatchSnapshot();
  });

  it('should fetch all purchase orders supplier persona', async () => {
    const PURCHASEORDER_ALL = gql`
      query {
        supplierAllPurchaseOrders {
          id
          purchaseOrderNo
          shipmentNo
          adminStatus
          supplierStatusHeader
          vendorAddress {
            id
            building_name
            street
            city
            state
            zip_code
          }
          supplier {
            id
            supplierNo
            supplierName
            tin
            contactNumber
            contactPerson
            address {
              id
              building_name
              street
              city
              state
              zip_code
            }
          }
          documentDate
          items {
            id
            itemNo
            description
            quantity
            uom
            unitPrice
            currency
            deliveryAddress {
              id
              building_name
              street
              city
              state
              zip_code
            }
            totalAmount
            supplierStatusItem
            scheduleLine {
              id
              quantity
              uom
              unitPrice
              totalAmount
              deliveryDateAndTime
              deliveryStatus {
                id
                status
                dateCreated
                timeCreated
              }
            }
          }
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({ query: PURCHASEORDER_ALL });

    expect(res).toMatchSnapshot();
  });

  it('should fetch all purchase orders filtered by status for admin persona', async () => {
    const PURCHASEORDER_ALL_STATUS = gql`
      query po($status: String) {
        purchaseOrdersStatus(status: $status) {
          id
          purchaseOrderNo
          shipmentNo
          adminStatus
          supplierStatusHeader
          vendorAddress {
            id
            building_name
            street
            city
            state
            zip_code
          }
          supplier {
            id
            supplierNo
            supplierName
            tin
            contactNumber
            contactPerson
            address {
              id
              building_name
              street
              city
              state
              zip_code
            }
          }
          documentDate
          items {
            id
            itemNo
            description
            quantity
            uom
            unitPrice
            currency
            deliveryAddress {
              id
              building_name
              street
              city
              state
              zip_code
            }
            totalAmount
            supplierStatusItem
            scheduleLine {
              id
              quantity
              uom
              unitPrice
              totalAmount
              deliveryDateAndTime
              deliveryStatus {
                id
                status
                dateCreated
                timeCreated
              }
            }
          }
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({ query: PURCHASEORDER_ALL_STATUS });

    expect(res).toMatchSnapshot();
  });

  it('should fetch all purchase orders filtered by status for supplier persona', async () => {
    const PURCHASEORDER_ALL_STATUS = gql`
      query po($status: String) {
        supplierPurchaseOrdersByStatus(status: $status) {
          id
          purchaseOrderNo
          shipmentNo
          adminStatus
          supplierStatusHeader
          vendorAddress {
            id
            building_name
            street
            city
            state
            zip_code
          }
          supplier {
            id
            supplierNo
            supplierName
            tin
            contactNumber
            contactPerson
            address {
              id
              building_name
              street
              city
              state
              zip_code
            }
          }
          documentDate
          items {
            id
            itemNo
            description
            quantity
            uom
            unitPrice
            currency
            deliveryAddress {
              id
              building_name
              street
              city
              state
              zip_code
            }
            totalAmount
            supplierStatusItem
            scheduleLine {
              id
              quantity
              uom
              unitPrice
              totalAmount
              deliveryDateAndTime
              deliveryStatus {
                id
                status
                dateCreated
                timeCreated
              }
            }
          }
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({ query: PURCHASEORDER_ALL_STATUS });

    expect(res).toMatchSnapshot();
  });

  it('should fetch one purchase order admin persona', async () => {
    const SINGLE_PURCHASEORDER = gql`
      query po($id: ID!) {
        purchaseOrder(id: $id) {
          id
          purchaseOrderNo
          shipmentNo
          adminStatus
          supplierStatusHeader
          vendorAddress {
            id
            building_name
            street
            city
            state
            zip_code
          }
          supplier {
            id
            supplierNo
            supplierName
            tin
            contactNumber
            contactPerson
            address {
              id
              building_name
              street
              city
              state
              zip_code
            }
          }
          documentDate
          items {
            id
            itemNo
            description
            quantity
            uom
            unitPrice
            currency
            deliveryAddress {
              id
            }
            totalAmount
            supplierStatusItem
            scheduleLine {
              id
              quantity
              uom
              unitPrice
              totalAmount
              deliveryDateAndTime
              deliveryStatus {
                id
                status
                dateCreated
                timeCreated
              }
            }
          }
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_PURCHASEORDER,
      variables: { id: '1' },
    });

    expect(res).toMatchSnapshot();
  });

  it('should fetch one purchase order supplier persona', async () => {
    const SINGLE_PURCHASEORDER = gql`
      query po($id: ID!) {
        purchaseOrderSupplier(id: $id) {
          id
          purchaseOrderNo
          shipmentNo
          adminStatus
          supplierStatusHeader
          vendorAddress {
            id
            building_name
            street
            city
            state
            zip_code
          }
          supplier {
            id
            supplierNo
            supplierName
            tin
            contactNumber
            contactPerson
            address {
              id
              building_name
              street
              city
              state
              zip_code
            }
          }
          documentDate
          items {
            id
            itemNo
            description
            quantity
            uom
            unitPrice
            currency
            deliveryAddress {
              id
            }
            totalAmount
            supplierStatusItem
            scheduleLine {
              id
              quantity
              uom
              unitPrice
              totalAmount
              deliveryDateAndTime
              deliveryStatus {
                id
                status
                dateCreated
                timeCreated
              }
            }
          }
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_PURCHASEORDER,
      variables: { id: '1' },
    });

    expect(res).toMatchSnapshot();
  });

  it('should error when no purchase order', async () => {
    const SINGLE_PURCHASEORDER = gql`
      query po($id: ID!) {
        purchaseOrder(id: $id) {
          id
          purchaseOrderNo
          shipmentNo
          adminStatus
          supplierStatusHeader
          vendorAddress {
            id
            building_name
            street
            city
            state
            zip_code
          }
          supplier {
            id
            supplierNo
            supplierName
            tin
            contactNumber
            contactPerson
            address {
              id
              building_name
              street
              city
              state
              zip_code
            }
          }
          documentDate
          items {
            id
            itemNo
            description
            quantity
            uom
            unitPrice
            currency
            deliveryAddress {
              id
            }
            totalAmount
            supplierStatusItem
            scheduleLine {
              id
              quantity
              uom
              unitPrice
              totalAmount
              deliveryDateAndTime
              deliveryStatus {
                id
                status
                dateCreated
                timeCreated
              }
            }
          }
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_PURCHASEORDER,
      variables: { id: '' },
    });

    expect(res).toMatchSnapshot();
  });

  //Mutations

  it('create a purchase order', async () => {
    const CREATE_PURCHASEORDER = gql`
      mutation createPO($purchaseOrder: PurchaseOrderInput) {
        createPurchaseOrder(purchaseOrder: $purchaseOrder) {
          id
          postingDate
          purchaseOrderNo
          adminStatus
          supplierStatusHeader
          shipmentNo
          vendorAddress {
            id
            building_name
            street
            city
            state
            zip_code
          }
          supplier {
            id
            supplierNo
            supplierName
            tin
            contactNumber
            contactPerson
            address {
              id
              building_name
              street
              city
              state
              zip_code
            }
          }
          documentDate
          items {
            id
            itemNo
            productId
            discount
            description
            quantity
            uom
            unitPrice
            currency
            deliveryAddress {
              id
              building_name
              street
              city
              state
              zip_code
            }
            totalAmount
            supplierStatusItem
            scheduleLine {
              id
              quantity
              uom
              unitPrice
              totalAmount
              deliveryDateAndTime
              deliveryStatus {
                id
                status
                dateCreated
                timeCreated
              }
            }
          }
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: CREATE_PURCHASEORDER,
      variables: {
        purchaseOrder: {
          purchaseOrderNo: '001',
          adminStatus: 'Pending',
          supplierStatusHeader: 'Pending',
          shipmentNo: '123',
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
              quantity: 10,
              uom: 'kilograms',
              unitPrice: 1000,
              discount: 0.05,
              totalAmount: 10000,
              deliveryAddress: {
                building_name: '002',
                street: 'Elmer',
                city: 'Celadon',
                state: 'Johto',
                zip_code: '123',
              },
              scheduleLine: [
                {
                  quantity: 10,
                  uom: 'kilograms',
                  deliveryDateAndTime: 'February 25,2020 4:30PM',
                  unitPrice: 1000,
                  totalAmount: 10000,
                  deliveryStatus: [
                    {
                      status: 'Delivered',
                    },
                  ],
                },
              ],
              currency: 'PHP',
            },
          ],
        },
      },
    });

    expect(res.errors).toBeUndefined();
    expect(purchaseOrderMock.insert.mock.calls.length).toBe(1);
    expect(res.data).toMatchObject({
      createPurchaseOrder: {
        id: '1',
        purchaseOrderNo: '001',
        adminStatus: 'Pending',
        supplierStatusHeader: 'Pending',
        shipmentNo: '123',
        supplier: {
          id: '1',
          supplierNo: '001',
          supplierName: 'Juan Dela Cruz',
          address: {
            id: 'A2',
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
          id: 'A1',
          building_name: '002',
          street: 'Elmer',
          city: 'Celadon',
          state: 'Johto',
          zip_code: '123',
        },
        items: [
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
            deliveryAddress: {
              building_name: '002',
              street: 'Elmer',
              city: 'Celadon',
              state: 'Johto',
              zip_code: '123',
            },
            scheduleLine: [
              {
                id: '2',
                quantity: 10,
                uom: 'kilograms',
                deliveryDateAndTime: 'February 25,2020 4:30PM',
                unitPrice: 1000,
                totalAmount: 10000,
                deliveryStatus: [
                  {
                    id: '2',
                    status: 'Delivered',
                    dateCreated: 'February 14, 2020',
                    timeCreated: '4:30 PM',
                  },
                ],
              },
            ],
            currency: 'PHP',
          },
        ],
      },
    });
    expect(res).toMatchSnapshot();
  });

  it('update a purchase order', async () => {
    const UPDATE_PURCHASEORDER = gql`
      mutation i($purchaseOrder: UpdatePurchaseOrderInput!) {
        updatePurchaseOrder(purchaseOrder: $purchaseOrder) {
          id
          adminStatus
          supplierStatusHeader
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: UPDATE_PURCHASEORDER,
      variables: {
        purchaseOrder: {
          id: '1',
          adminStatus: 'Recieved',
          supplierStatusHeader: 'Delivered',
        },
      },
    });

    expect(res).toMatchSnapshot();
  });

  it('update a purchase order admin status', async () => {
    const UPDATE_PURCHASEORDER = gql`
      mutation i($purchaseOrder: UpdateAdminStatusInput!) {
        updateAdminStatus(purchaseOrder: $purchaseOrder) {
          id
          adminStatus
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: UPDATE_PURCHASEORDER,
      variables: {
        purchaseOrder: {
          id: '1',
          adminStatus: 'Recieved',
        },
      },
    });

    expect(res).toMatchSnapshot();
  });

  it('delete a puchase order', async () => {
    const DELETE_PURCHASEORDER = gql`
      mutation i($id: ID!) {
        deletePurchaseOrder(id: $id) {
          id
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: DELETE_PURCHASEORDER,
      variables: { id: '1' },
    });

    expect(res).toMatchSnapshot();
  });
});
