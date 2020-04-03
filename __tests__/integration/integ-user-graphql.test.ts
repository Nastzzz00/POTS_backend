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
  //User
  createCreateUserDB,
  updateUserByIDDB,
} = controllers;

const userMock = {
  insert: jest.fn(async input => {
    return { id: '1', ...input };
  }),
  getById: jest.fn(async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.users.filter(filterData);

    return res[0] || null;
  }),
  getAll: jest.fn(async () => {
    return mockData.users;
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
    const res = mockData.users.filter(filterData);
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
    createUser: createCreateUserDB(userMock),
    getAllUsers: getAllDataDB(userMock),
    getUserById: getByIDDB(userMock),
    updateUserById: updateUserByIDDB(userMock),
    deleteUserById: DeleteRecordByIDDB(userMock),
  },
});

describe('Tests', () => {
  //Queries
  it('should fetch all user', async () => {
    const USER_ALL = gql`
      query {
        allUsers {
          id
          userName
          password
          userLevel
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({ query: USER_ALL });

    expect(res).toMatchSnapshot();
  });

  it('should fetch one user', async () => {
    const SINGLE_USER = gql`
      query u($id: String!) {
        user(id: $id) {
          id
          userName
          password
          userLevel
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_USER,
      variables: { id: '1' },
    });

    expect(res).toMatchSnapshot();
  });

  it('should error when no user', async () => {
    const SINGLE_USER = gql`
      query u($id: String!) {
        user(id: $id) {
          id
          userName
          password
          userLevel
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_USER,
      variables: { id: '' },
    });

    expect(res).toMatchSnapshot();
  });

  //Mutations

  it('should create a user', async () => {
    const CREATE_USER = gql`
      mutation createUser($user: UserInput!) {
        createUser(user: $user) {
          id
          userId
          userName
          password
          userLevel
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: CREATE_USER,
      variables: {
        user: {
          userId: '001',
          userName: 'User Name1',
          password: '12345',
          userLevel: 'Admin',
        },
      },
    });

    expect(res.errors).toBeUndefined();
    expect(userMock.insert.mock.calls.length).toBe(1);
    expect(res.data).toMatchObject({
      createUser: {
        id: '1',
        userId: '001',
        userName: 'User Name1',
        password: '12345',
        userLevel: 'Admin',
      },
    });
    expect(res).toMatchSnapshot();
  });

  it('should delete a user', async () => {
    const DELETE_USER = gql`
      mutation u($id: ID!) {
        deleteUser(id: $id) {
          id
        }
      }
    `;
    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: DELETE_USER,
      variables: { id: 'U1' },
    });
    expect(res.errors).toBeUndefined();
    expect(res).toMatchSnapshot();
  });

  it('should update a user', async () => {
    const UPDATE_USER = gql`
      mutation u($user: UpdateUserInput!) {
        updateUser(user: $user) {
          id
          userName
          password
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: UPDATE_USER,
      variables: {
        user: {
          id: '1',
          userName: 'User Name1',
          password: '12345',
        },
      },
    });

    expect(res).toMatchSnapshot();
  });
});
