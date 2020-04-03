import { makeUser } from '../user';

const createUCCreateUser = () => userInput => {
	const user = makeUser({
		userId: userInput.userId,
		userName: userInput.userName,
		password: userInput.password,
		userLevel: userInput.userLevel,
	});

	return user;
};

export { createUCCreateUser };
