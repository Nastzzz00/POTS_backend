import { createCreateUserDB } from './create-user-db';

describe('Create User', () => {
	const mockDB: any = {
		insert: jest.fn(async input => {
			return { _id: '1', ...input };
		}),
	};

	const createUser = createCreateUserDB(mockDB);

	it('Should be able to save a user to a database', async () => {
		const userInput = {
			userId: '001',
			userName: 'User Name1',
			password: '12345',
			userLevel: 'Admin',
		};

		const newUser = await createUser(userInput);

		expect(mockDB.insert.mock.calls.length).toBe(1);
		expect(newUser).toMatchObject({ _id: '1', ...userInput });
	});
});
