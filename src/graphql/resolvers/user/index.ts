const userResolvers = {
  Query: {
    user: async (parent, { id }, { getUserById }, info) => {
      return getUserById(id);
    },

    allUsers: async (parent, args, { getAllUsers }, info) => {
      return getAllUsers();
    },
  },
  Mutation: {
    createUser: async (_, { user }, { createUser }) => {
      return createUser(user);
    },

    updateUser: async (parent, { user }, { updateUserById }, info) => {
      return updateUserById(user);
    },

    deleteUser: async (parent, { id }, { deleteUserById }, info) => {
      return deleteUserById(id);
    },
  },
};

export default userResolvers;
