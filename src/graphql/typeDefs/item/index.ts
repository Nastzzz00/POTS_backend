import { gql } from 'apollo-server';

const typeDefs = gql`
  type Item {
    id: ID!
    itemNo: String!
    productId: String!
    description: String!
    quantity: Float!
    uom: String!
    unitPrice: Float!
    totalAmount: Float!
    discount: Float
    deliveryAddress: Address!
    supplierStatusItem: String
    scheduleLine: [ScheduleLine]
    currency: String!
    dateUpdated: String
    timeUpdated: String
  }

  type Query {
    item(id: String): Item
    allItems: [Item]
  }

  type Mutation {
    createItem(item: ItemInput!): Item
    updateItem(item: UpdateItemInput!): Item
    updateSupplierStatusItem(item: UpdateSupplierStatusItemInput): Item
    deleteItem(id: ID!): Item
  }

  input ItemInput {
    itemNo: String!
    productId: String!
    description: String!
    quantity: Float!
    uom: String!
    unitPrice: Float!
    totalAmount: Float!
    discount: Float
    supplierStatusItem: String
    deliveryAddress: AddressInput!
    scheduleLine: [ScheduleLineInput!]!
    currency: String!
    dateUpdated: String
    timeUpdated: String
  }

  input UpdateItemInput {
    id: ID!
    itemNo: String
    productId: String
    description: String
    quantity: Float
    uom: String
    unitPrice: Float
    totalAmount: Float
    discount: Float
    supplierStatusItem: String
    # scheduleLine: [ScheduleLineInput]
    currency: String
    dateUpdated: String
    timeUpdated: String
  }
  input UpdateSupplierStatusItemInput {
    id: ID!
    supplierStatusItem: String!
  }
`;

export default typeDefs;
