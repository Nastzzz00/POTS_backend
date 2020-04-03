import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import mockData from '../mocks/mock-data';
import * as controllers from '../../src/controllers';
import { constructTestServer } from '../__utils';

const {
  getAllDataDB,
  getByIDDB,
  DeleteRecordByIDDB,
  createCreateScheduleLineDB,
  updateScheduleLineByIDDB,
  getAllBySupplierStatusDB,
  createCreateSupplierStatusDB,
} = controllers;

const scheduleLinesMock = {
  insert: jest.fn(async input => {
    return { id: '1', ...input };
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
  deleteById: async id => {},
  getAllBySupplierStatus: async id => {},
  getAllByItem: async id => {},
  getAllByScheduleLine: async id => {},
  updateSupplierStatusItemById: async id => {},
  updateAdminStatusPurchaseOrderById: async id => {},
};

const { server }: any = constructTestServer({
  context: {
    createScheduleLine: createCreateScheduleLineDB(scheduleLinesMock),
    updateScheduleLine: updateScheduleLineByIDDB(scheduleLinesMock),
    deleteScheduleLineById: DeleteRecordByIDDB(scheduleLinesMock),
    getScheduleLineById: getByIDDB(scheduleLinesMock),
    getAllScheduleLines: getAllDataDB(scheduleLinesMock),
    getAllSupplierStatusByScheduleLine: getAllBySupplierStatusDB(
      scheduleLinesMock,
    ),
    createSupplierStatus: createCreateSupplierStatusDB(supplierStatusMock),
  },
});

describe('Tests', () => {
  //Queries

  it('should fetch all schedule lines', async () => {
    const SCHEDULELINES_ALL = gql`
      query {
        allScheduleLines {
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
    `;

    const { query } = createTestClient(server);
    const res = await query({ query: SCHEDULELINES_ALL });

    expect(res).toMatchSnapshot();
  });

  it('should fetch one schedule line', async () => {
    const SINGLE_SCHEDULELINE = gql`
      query ss($id: String!) {
        scheduleLine(id: $id) {
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
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_SCHEDULELINE,
      variables: { id: '1' },
    });

    expect(res).toMatchSnapshot();
  });

  it('should error when no schedule line', async () => {
    const SINGLE_SCHEDULELINE = gql`
      query ss($id: String!) {
        scheduleLine(id: $id) {
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
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_SCHEDULELINE,
      variables: { id: '' },
    });

    expect(res).toMatchSnapshot();
  });

  //Mutations

  it('create a schedule line', async () => {
    const CREATE_SCHEDULELINE = gql`
      mutation createSl($scheduleLine: ScheduleLineInput!) {
        createScheduleLine(scheduleLine: $scheduleLine) {
          id
          quantity
          uom
          deliveryDateAndTime
          unitPrice
          totalAmount
          deliveryStatus {
            id
            status
            dateCreated
            timeCreated
          }
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: CREATE_SCHEDULELINE,
      variables: {
        scheduleLine: {
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
      },
    });

    expect(res.errors).toBeUndefined();
    expect(scheduleLinesMock.insert.mock.calls.length).toBe(1);
    expect(res.data).toMatchObject({
      createScheduleLine: {
        id: '1',
        quantity: 10,
        uom: 'kilograms',
        deliveryDateAndTime: 'February 25,2020 4:30PM',
        unitPrice: 1000,
        totalAmount: 10000,
        deliveryStatus: [
          {
            id: '1',
            status: 'Dispatched',
            dateCreated: 'February 14, 2020',
            timeCreated: '4:30 PM',
          },
        ],
      },
    });
    expect(res).toMatchSnapshot();
  });

  it('delete a schedule Line', async () => {
    const DELETE_SCHEDULELINE = gql`
      mutation sl($id: ID!) {
        deleteScheduleLine(id: $id) {
          id
        }
      }
    `;
    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: DELETE_SCHEDULELINE,
      variables: { id: 'U1' },
    });
    expect(res.errors).toBeUndefined();
    expect(res).toMatchSnapshot();
  });

  it('update a schedule line', async () => {
    const UPDATE_SCHEDULELINE = gql`
      mutation sl($scheduleLine: UpdateScheduleLineInput!) {
        updateScheduleLine(scheduleLine: $scheduleLine) {
          id
          deliveryStatus {
            id
            status
            dateCreated
            timeCreated
          }
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: UPDATE_SCHEDULELINE,
      variables: {
        scheduleLine: {
          id: '1',
          deliveryStatus: [
            {
              //   id: '1',
              status: 'Dispatched',
              //   dateCreated: 'February 14, 2020',
              //   timeCreated: '4:30 PM',
            },
          ],
        },
      },
    });

    expect(res).toMatchSnapshot();
  });
});
