import { DeleteRecordByIDDB } from './delete-data-db';

const mockUser = [
	{
		_id: '1',
		userId: '001',
		userName: 'User Name1',
		password: '12345',
		userLevel: 'Admin',
	},
	{
		_id: '2',
		userId: '002',
		userName: 'User Name2',
		password: '12345',
		userLevel: 'Supplier',
	},
];

describe('Delete User', () => {
	it('Should be able to delete a user from the database', async () => {
		const mockDB: any = {
			deleteById: jest.fn(async id => {
				const filterTag = com => {
					if (com._id === id) {
						return com;
					}
				};

				return mockUser.filter(filterTag)[0];
			}),
		};

		const deleteOneUser = DeleteRecordByIDDB(mockDB);
		const user = await deleteOneUser('1');
		expect(mockDB.deleteById.mock.calls.length).toBe(1);

		expect(user).toMatchObject({
			_id: '1',
			userId: '001',
			userName: 'User Name1',
			password: '12345',
			userLevel: 'Admin',
		});
	});
});
