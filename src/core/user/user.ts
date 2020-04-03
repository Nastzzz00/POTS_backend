export type TUser = {
	userId: string;
	userName: string;
	password: string;
	userLevel: string;
};

const createMakeUser = () => ({ userName, password, userLevel, userId }): TUser => {
	if (!userId) {
		throw new Error('User ID is required.');
	}
	if (!userName) {
		throw new Error('Username is required.');
	}
	if (!password) {
		throw new Error('Password is required.');
	}
	if (!userLevel) {
		throw new Error('User Level is required.');
	}

	return {
		userId: userId,
		userName: userName,
		password: password,
		userLevel: userLevel,
	};
};

export { createMakeUser };
