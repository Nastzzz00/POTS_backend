import { gql } from 'apollo-server';

const addresstypeDefs = gql`
	type Address {
		id: ID!
		building_name: String!
		street: String!
		city: String!
		state: String!
		zip_code: String!
	}

	type Query {
		address(id: ID!): Address
		allAddresss: [Address!]!
	}

	input AddressInput {
		building_name: String!
		street: String!
		city: String!
		state: String!
		zip_code: String!
	}
`;

export default addresstypeDefs;
