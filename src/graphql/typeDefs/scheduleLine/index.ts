import { gql } from "apollo-server";

const typeDefs = gql`
  type ScheduleLine {
    id: ID!
    quantity: Float!
    uom: String!
    unitPrice: Float!
    totalAmount: Float!
    deliveryDateAndTime: String!
    deliveryStatus: [SupplierStatus]
  }

  type Query {
    scheduleLine(id: String): ScheduleLine
    allScheduleLines: [ScheduleLine]
  }

  type Mutation {
    createScheduleLine(scheduleLine: ScheduleLineInput!): ScheduleLine
    updateScheduleLine(scheduleLine: UpdateScheduleLineInput!): ScheduleLine
    deleteScheduleLine(id: ID!): ScheduleLine
  }

  input ScheduleLineInput {
    quantity: Float!
    uom: String!
    unitPrice: Float!
    totalAmount: Float!
    deliveryDateAndTime: String!
    deliveryStatus: [SupplierStatusInput]
  }

  input UpdateScheduleLineInput {
    id: ID!
    quantity: Float
    uom: String
    unitPrice: Float
    totalAmount: Float
    deliveryDateAndTime: String
    deliveryStatus: [SupplierStatusInput]
  }
`;

export default typeDefs;
