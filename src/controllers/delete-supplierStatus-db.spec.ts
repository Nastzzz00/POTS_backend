import { DeleteRecordByIDDB } from './delete-data-db';

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

describe('Delete Supplier Status', () => {
	it('Should be able to delete a supplier status from the database', async () => {
		const mockDB: any = {
			deleteById: jest.fn(async id => {
				const filterTag = com => {
					if (com._id === id) {
						return com;
					}
				};

				return mockSupplierStatus.filter(filterTag)[0];
			}),
		};

		const deleteOneSupplierStatus = DeleteRecordByIDDB(mockDB);
		const supplierStatus = await deleteOneSupplierStatus('1');
		expect(mockDB.deleteById.mock.calls.length).toBe(1);

		expect(supplierStatus).toMatchObject({
			_id: '1',
			status: 'Dispatched',
			dateCreated: 'February 14, 2020',
			timeCreated: '4:30 PM',
		});
	});
});
