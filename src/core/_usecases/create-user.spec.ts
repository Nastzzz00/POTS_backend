import { createUCCreateUser } from './create-user-usecase';

const addUser = createUCCreateUser();

describe('Create a User', () => {
	it('Should be able to create a user', () => {
		const userInput = {
			userId: '001',
			userName: 'ncarps',
			password: '1234',
			userLevel: 'Admin',
		};
		const newUser = addUser(userInput);
		expect(newUser).toMatchObject(userInput);
	});
});
