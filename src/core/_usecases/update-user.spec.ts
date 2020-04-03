import { updateUCUser } from './update-user.usecase';
const updateUser = updateUCUser();

describe('UseCase: Update a User ', () => {
	it('should be able to update a User', () => {
		const userInput = {
			userName: 'User Name1',
			password: '1234',
		};

		const oldUserInput = {
			userId: '001',
			userName: 'User Name12',
			password: '12345',
			userLevel: 'Admin',
		};
		const newUser = updateUser(userInput, oldUserInput);
		expect(newUser).toMatchObject(userInput);
	});
});
