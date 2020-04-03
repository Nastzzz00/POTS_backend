import { gql } from 'apollo-server';

const typeDefs = gql`
  type Message {
    message: String
    loggedIn: Boolean
    userLevel: String
  }

  type Query {
    login(credential: CredentialInput!): Message
  }

  input CredentialInput {
    username: String!
    password: String!
  }
`;

export default typeDefs;
