const messageResolver = {
  Query: {
    login: async (parent, { credential }, { getUserById }, info) => {
      const { username, password } = credential;
      if (username === 'bmNhcnBpbw==' && password === 'MTIz') {
        return {
          message: 'Admin Logged In',
          loggedIn: true,
          userLevel: 'Admin',
        };
      }

      if (username === 'YXNhbm95' && password === 'MTIz') {
        return {
          message: 'Supplier Logged In',
          loggedIn: true,
          userLevel: 'Supplier',
        };
      }

      return {
        message: 'Wrong Credentials',
        loggedIn: false,
        userLevel: 'none',
      };
    },
  },
  Mutation: {},
};

export default messageResolver;
