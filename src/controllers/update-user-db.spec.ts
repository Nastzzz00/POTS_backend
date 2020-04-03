import { updateUserByIDDB } from './update-user-db';

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

describe('Update User', () => {
	const mockDb: any = {
		updateById: jest.fn(async input => {
			return { ...input };
		}),
		getById: jest.fn(async id => {
			const filterMock = data => {
				if (data._id === id) {
					return data;
				}
			};

			return mockUser.filter(filterMock);
		}),
	};
	const updateUser = updateUserByIDDB(mockDb);

	it('should be able to update a user in the DB', async () => {
		const given = {
			userId: '001',
			userName: 'User Name1',
			password: '123456',
			userLevel: 'Admin',
		};

		const newData = await updateUser(given);

		expect(mockDb.getById.mock.calls.length).toBe(1);
		expect(mockDb.updateById.mock.calls.length).toBe(1);
		expect(newData).toMatchObject(given);
	});
});
