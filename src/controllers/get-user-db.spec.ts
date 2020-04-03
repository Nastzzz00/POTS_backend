import { getAllDataDB, getByIDDB } from './retrieve-data-db';

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

describe('Retrieve User', () => {
	it('Should be able to return all user from db', async () => {
		const mockDB: any = {
			getAll: jest.fn(async () => {
				return [...mockUser];
			}),
		};

		const getAllData = getAllDataDB(mockDB);
		const allData = await getAllData();
		expect(mockDB.getAll.mock.calls.length).toBe(1);
		expect(allData).toMatchObject(mockUser);
	});

	it('Should be able to return one User from db', async () => {
		const oneData = [mockUser[0]];
		const mockDB: any = {
			getById: jest.fn(async id => {
				const filterMock = data => {
					if (data._id === id) {
						return data;
					}
				};

				return mockUser.filter(filterMock);
			}),
		};

		const getOneData = getByIDDB(mockDB);
		const data = await getOneData('1');
		expect(mockDB.getById.mock.calls.length).toBe(1);

		expect(data).toMatchObject(oneData);
	});
});
