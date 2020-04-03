import gql from 'graphql-tag';
import { createTestClient } from 'apollo-server-testing';
import { constructTestServer } from '../__utils';

const { server }: any = constructTestServer({
  context: {},
});

describe('Tests', () => {
  //Queries
  it('login as admin ', async () => {
    const MessageQuery = gql`
      query i($credential: CredentialInput!) {
        login(credential: $credential) {
          message
          loggedIn
          userLevel
        }
      }
    `;
    const { query } = createTestClient(server);
    const res = await query({
      query: MessageQuery,
      variables: {
        credential: {
          username: 'bmNhcnBpbw==',
          password: 'MTIz',
        },
      },
    });

    expect(res).toMatchSnapshot();
  });

  it('login as supplier ', async () => {
    const MessageQuery = gql`
      query i($credential: CredentialInput!) {
        login(credential: $credential) {
          message
          loggedIn
          userLevel
        }
      }
    `;
    const { query } = createTestClient(server);
    const res = await query({
      query: MessageQuery,
      variables: {
        credential: {
          username: 'YXNhbm95',
          password: 'MTIz',
        },
      },
    });

    expect(res).toMatchSnapshot();
  });

  it('login as supplier ', async () => {
    const MessageQuery = gql`
      query i($credential: CredentialInput!) {
        login(credential: $credential) {
          message
          loggedIn
          userLevel
        }
      }
    `;
    const { query } = createTestClient(server);
    const res = await query({
      query: MessageQuery,
      variables: {
        credential: {
          username: 'Something Something',
          password: 'Dota 2',
        },
      },
    });

    expect(res).toMatchSnapshot();
  });
});
