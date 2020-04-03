import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import mockData from '../mocks/mock-data';
import * as controllers from '../../src/controllers';
import { constructTestServer } from '../__utils';

const {
  //Generic
  getAllDataDB,
  getByIDDB,
} = controllers;

const addressMock = {
  insert: jest.fn(async input => {
    return { id: '1', ...input };
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
    getAddressById: getByIDDB(addressMock),
    getAllAddress: getAllDataDB(addressMock),
  },
});

describe('Tests', () => {
  //Queries
  it('should fetch all address', async () => {
    const ADDRESS_ALL = gql`
      query {
        allAddresss {
          id
          building_name
          street
          city
          state
          zip_code
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({ query: ADDRESS_ALL });

    expect(res.errors).toBeUndefined();
    expect(addressMock.getAll.mock.calls.length).toBe(1);
    expect(res).toMatchSnapshot();
  });

  it('should fetch one address', async () => {
    const SINGLE_ADDRESS = gql`
      query add($id: ID!) {
        address(id: $id) {
          id
          building_name
          street
          city
          state
          zip_code
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_ADDRESS,
      variables: { id: 'A1' },
    });
    expect(res.errors).toBeUndefined();
    expect(res).toMatchSnapshot();
  });

  it('should error when no address', async () => {
    const SINGLE_ADDRESS = gql`
      query add($id: ID!) {
        address(id: $id) {
          id
          building_name
          street
          city
          state
          zip_code
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_ADDRESS,
      variables: { id: '' },
    });

    expect(res).toMatchSnapshot();
  });
});
