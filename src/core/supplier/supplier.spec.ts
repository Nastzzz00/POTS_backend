import { createMakeSupplier } from './supplier';
const makeSupplier = createMakeSupplier();

describe('Supplier', () => {
	it('must have a supplier number', () => {
		const supplier = {
			supplierNo: '',
			supplierName: 'Juan Dela Cruz',
			address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			contactPerson: 'Basil Valdez',
			contactNumber: '1234567',
			tin: '12345',
		};
		expect(() => makeSupplier(supplier)).toThrow('Supplier No. is required.');
	});

	it('must have a supplier name', () => {
		const supplier = {
			supplierNo: '001',
			supplierName: '',
			address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			contactPerson: 'Basil Valdez',
			contactNumber: '1234567',
			tin: '12345',
		};
		expect(() => makeSupplier(supplier)).toThrow('Supplier Name is required.');
	});

	it('must have a supplier name', () => {
		const supplier = {
			supplierNo: '001',
			supplierName: '',
			address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			contactPerson: 'Basil Valdez',
			contactNumber: '1234567',
			tin: '12345',
		};
		expect(() => makeSupplier(supplier)).toThrow('Supplier Name is required.');
	});

	it('must have an address', () => {
		const supplier = {
			supplierNo: '001',
			supplierName: 'Juan Dela Cruz',
			address: '',
			contactPerson: 'Basil Valdez',
			contactNumber: '1234567',
			tin: '12345',
		};
		expect(() => makeSupplier(supplier)).toThrow('Address is required.');
	});

	it('must have a contact person', () => {
		const supplier = {
			supplierNo: '001',
			supplierName: 'Juan Dela Criz',
			address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			contactPerson: '',
			contactNumber: '1234567',
			tin: '12345',
		};
		expect(() => makeSupplier(supplier)).toThrow('Contact Person is required.');
	});

	it('must have a contact number', () => {
		const supplier = {
			supplierNo: '001',
			supplierName: 'Juan Dela Criz',
			address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			contactPerson: 'Basil Valdez',
			contactNumber: '',
			tin: '12345',
		};
		expect(() => makeSupplier(supplier)).toThrow('Contact Number is required.');
	});

	it('must have a tin', () => {
		const supplier = {
			supplierNo: '001',
			supplierName: 'Juan Dela Criz',
			address: { building_name: '002', street: 'Elmer', city: 'Celadon', state: 'Johto', zip_code: '123' },
			contactPerson: 'Basil Valdez',
			contactNumber: '1234',
			tin: '',
		};
		expect(() => makeSupplier(supplier)).toThrow('TIN is required.');
	});
});
