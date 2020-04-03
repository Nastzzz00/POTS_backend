import { gql } from 'apollo-server';

const typeDefs = gql`
	type User {
		id: ID!
		userId: String!
		userName: String!
		password: String!
		userLevel: String!
	}

	type Query {
		user(id: String): User
		allUsers: [User]
	}

	type Mutation {
		createUser(user: UserInput!): User
		updateUser(user: UpdateUserInput): User
		deleteUser(id: ID): User
	}

	input UserInput {
		userId: String!
		userName: String!
		password: String!
		userLevel: String!
	}

	input UpdateUserInput {
		id: ID!
		userName: String
		password: String
	}
`;

export default typeDefs;
