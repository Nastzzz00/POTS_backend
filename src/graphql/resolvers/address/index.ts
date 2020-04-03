const addressResolvers = {
	Query: {
		address: async (parent, { id }, context, info) => {
			const { getAddressById } = context;
			return await getAddressById(id);
		},
		allAddresss: async (parent, args, context, info) => {
			const { getAllAddress } = context;
			return await getAllAddress();
		},
	},
	Mutation: {},
};

export default addressResolvers;
