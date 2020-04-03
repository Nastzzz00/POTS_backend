import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import mockData from '../mocks/mock-data';
import * as controllers from '../../src/controllers';
import { constructTestServer } from '../__utils';

const {
  //Generic
  getAllDataDB,
  getByIDDB,
  DeleteRecordByIDDB,
  createCreateSupplierDB,
  updateSupplierByIDDB,
} = controllers;

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

const addressMock = {
  insert: jest.fn(async input => {
    return { id: 'A2', ...input };
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

const { server }: any = constructTestServer({
  context: {
    createSupplier: createCreateSupplierDB(supplierMock),
    getAllSuppliers: getAllDataDB(supplierMock),
    getSupplierById: getByIDDB(supplierMock),
    deleteSupplierById: DeleteRecordByIDDB(supplierMock),
    updateSupplierById: updateSupplierByIDDB(supplierMock),
    getAddressById: getByIDDB(addressMock),
  },
});

describe('Tests', () => {
  //Queries
  it('should fetch all suppliers', async () => {
    const SUPPLIER_ALL = gql`
      query {
        allSuppliers {
          id
          supplierNo
          supplierName
          address {
            id
            building_name
            street
            city
            state
            zip_code
          }
          contactPerson
          contactNumber
          tin
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({ query: SUPPLIER_ALL });

    expect(res).toMatchSnapshot();
  });

  it('should fetch one supplier', async () => {
    const SINGLE_SUPPLIER = gql`
      query supp($id: ID!) {
        supplier(id: $id) {
          id
          supplierNo
          supplierName
          address {
            id
            building_name
            street
            city
            state
            zip_code
          }
          contactPerson
          contactNumber
          tin
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_SUPPLIER,
      variables: { id: '1' },
    });

    expect(res).toMatchSnapshot();
  });

  it('should error when no supplier', async () => {
    const SINGLE_SUPPLIER = gql`
      query supp($id: ID!) {
        supplier(id: $id) {
          id
          supplier {
            supplierNo
            supplierName
            address {
              id
              building_name
              street
              city
              state
              zip_code
            }
            contactPerson
            contactNumber
            tin
          }
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_SUPPLIER,
      variables: { id: '' },
    });

    expect(res).toMatchSnapshot();
  });

  //Mutations

  it('create a supplier', async () => {
    const CREATE_SUPPLIER = gql`
      mutation createSupp($supplier: SupplierInput!) {
        createSupplier(supplier: $supplier) {
          id
          supplierNo
          supplierName
          address {
            id
            building_name
            street
            city
            state
            zip_code
          }
          contactPerson
          contactNumber
          tin
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: CREATE_SUPPLIER,
      variables: {
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
      },
    });

    expect(res.errors).toBeUndefined();
    expect(supplierMock.insert.mock.calls.length).toBe(1);

    expect(res.data).toMatchObject({
      createSupplier: {
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
    });
    expect(res).toMatchSnapshot();
  });

  it('update a supplier', async () => {
    const UPDATE_SUPPLIER = gql`
      mutation supp($supplier: UpdateSupplierInput!) {
        updateSupplier(supplier: $supplier) {
          id
          supplierNo
          supplierName
          contactPerson
          contactNumber
          tin
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: UPDATE_SUPPLIER,
      variables: {
        supplier: {
          id: '1',
          supplierNo: '001',
          supplierName: 'Juan Dela Cruz',
          contactPerson: 'Basil Valdez',
          contactNumber: '1234567',
          tin: '12345',
        },
      },
    });

    expect(res).toMatchSnapshot();
  });

  it('delete a supplier', async () => {
    const DELETE_SUPPLIER = gql`
      mutation supp($id: ID!) {
        deleteSupplier(id: $id) {
          supplierName
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: DELETE_SUPPLIER,
      variables: { id: 'S1' },
    });

    expect(res).toMatchSnapshot();
  });
});
