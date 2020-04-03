import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import mockData from '../mocks/mock-data';
import * as controllers from '../../src/controllers';
import { constructTestServer } from '../__utils';

const {
  getAllDataDB,
  getByIDDB,
  DeleteRecordByIDDB,
  createCreateSupplierStatusDB,
  updateSupplierStatusByIDDB,
} = controllers;

const supplierStatusMock = {
  insert: jest.fn(async input => {
    return { id: '1', ...input };
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
  deleteById: async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.supplierStatus.filter(filterData);
    return res[0] || null;
  },
  getAllBySupplierStatus: async id => {},
  getAllByItem: async id => {},
  getAllByScheduleLine: async id => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};
const { server }: any = constructTestServer({
  context: {
    createSupplierStatus: createCreateSupplierStatusDB(supplierStatusMock),
    updateSupplierStatusById: updateSupplierStatusByIDDB(supplierStatusMock),
    deleteSupplierStatusById: DeleteRecordByIDDB(supplierStatusMock),
    getSupplierStatusById: getByIDDB(supplierStatusMock),
    getAllSupplierStatus: getAllDataDB(supplierStatusMock),
  },
});

describe('Tests', () => {
  it('should fetch all supplier status', async () => {
    const SUPPLIERSTATUS_ALL = gql`
      query {
        allSupplierStatus {
          id
          status
          dateCreated
          timeCreated
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({ query: SUPPLIERSTATUS_ALL });

    expect(res).toMatchSnapshot();
  });

  it('should fetch one supplier status', async () => {
    const SINGLE_SUPPLIERSTATUS = gql`
      query ss($id: String!) {
        supplierStatus(id: $id) {
          id
          status
          dateCreated
          timeCreated
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_SUPPLIERSTATUS,
      variables: { id: '1' },
    });

    expect(res).toMatchSnapshot();
  });

  it('should error when no supplier status', async () => {
    const SINGLE_SUPPLIERSTATUS = gql`
      query ss($id: String!) {
        supplierStatus(id: $id) {
          id
          status
          dateCreated
          timeCreated
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_SUPPLIERSTATUS,
      variables: { id: '' },
    });

    expect(res).toMatchSnapshot();
  });

  //Mutations

  it('create a supplier status', async () => {
    const CREATE_SUPPPLIERSTATUS = gql`
      mutation createSupplierStatus($supplierStatus: SupplierStatusInput!) {
        createSupplierStatus(supplierStatus: $supplierStatus) {
          id
          status
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: CREATE_SUPPPLIERSTATUS,
      variables: {
        supplierStatus: {
          status: 'yeeeeee',
        },
      },
    });

    expect(res.errors).toBeUndefined();
    expect(supplierStatusMock.insert.mock.calls.length).toBe(1);
    expect(res.data).toMatchObject({
      createSupplierStatus: {
        id: '1',
        status: 'yeeeeee',
      },
    });
    expect(res).toMatchSnapshot();
  });

  it('delete a supplier status', async () => {
    const DELETE_SUPPLIERSTATUS = gql`
      mutation ss($id: ID!) {
        deleteSupplierStatus(id: $id) {
          status
          dateCreated
          timeCreated
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: DELETE_SUPPLIERSTATUS,
      variables: { id: '1' },
    });

    expect(res).toMatchSnapshot();
  });

  it('update a supplier status', async () => {
    const UPDATE_SUPPLIERSTATUS = gql`
      mutation ss($supplierStatus: UpdateSupplierStatusInput!) {
        updateSupplierStatus(supplierStatus: $supplierStatus) {
          id
          status
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: UPDATE_SUPPLIERSTATUS,
      variables: {
        supplierStatus: {
          id: '1',
          status: 'Dispatched',
        },
      },
    });

    expect(res).toMatchSnapshot();
  });
});
