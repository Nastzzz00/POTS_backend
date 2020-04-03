import { getAllDataDB, getByIDDB } from './retrieve-data-db';

const mockSupplierStatus = [
	{
		_id: '1',
		status: 'Dispatched',
		dateCreated: 'February 14, 2020',
		timeCreated: '4:30 PM',
	},
	{
		_id: '2',
		status: 'Delivered',
		dateCreated: 'February 14, 2020',
		timeCreated: '4:30 PM',
	},
];

describe('Retrieve Supplier Status', () => {
	it('Should be able to return all supplier statuses from db', async () => {
		const mockDB: any = {
			getAll: jest.fn(async () => {
				return [...mockSupplierStatus];
			}),
		};

		const getAllSupplierStatus = getAllDataDB(mockDB);
		const allSupplierStatus = await getAllSupplierStatus();
		expect(mockDB.getAll.mock.calls.length).toBe(1);
		allSupplierStatus;
	});

	it('Should be able to return one supplier status from db', async () => {
		const oneSupplierStatus = [mockSupplierStatus[0]];
		const mockDB: any = {
			getById: jest.fn(async id => {
				const filterSupplierStatus = cust => {
					if (cust._id === id) {
						return cust;
					}
				};

				return mockSupplierStatus.filter(filterSupplierStatus);
			}),
		};

		const getOneSupplierStatus = getByIDDB(mockDB);
		const supplierStatus = await getOneSupplierStatus('1');
		expect(mockDB.getById.mock.calls.length).toBe(1);

		expect(supplierStatus).toMatchObject(oneSupplierStatus);
	});
});
