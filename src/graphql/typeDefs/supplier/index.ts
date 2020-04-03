import { gql } from 'apollo-server';

const suppliertypeDefs = gql`
	type Supplier {
		id: ID!
		supplierNo: String!
		supplierName: String!
		address: Address!
		tin: String!
		contactNumber: String!
		contactPerson: String!
	}

	type Query {
		supplier(id: ID!): Supplier!
		allSuppliers: [Supplier!]!
	}

	type Mutation {
		createSupplier(supplier: SupplierInput): Supplier
		deleteSupplier(id: ID!): Supplier
		updateSupplier(supplier: UpdateSupplierInput): Supplier
	}

	input SupplierInput {
		supplierNo: String!
		supplierName: String!
		address: AddressInput!
		tin: String!
		contactNumber: String!
		contactPerson: String!
	}

	input UpdateSupplierInput {
		id: ID!
		supplierNo: String
		supplierName: String
		tin: String
		contactNumber: String
		contactPerson: String
	}
`;

export default suppliertypeDefs;
