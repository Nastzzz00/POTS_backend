export type TAddress = {
	building_name: string;
	street: string;
	city: string;
	state: string;
	zip_code: string;
};

const createMakeAddress = () => (address: TAddress) => {
	const { building_name, state, city, street, zip_code } = address;
	if (!building_name) {
		throw new Error('Building is required.');
	}

	if (!street) {
		throw new Error('Street is required.');
	}

	if (!city) {
		throw new Error('City is required.');
	}

	if (!state) {
		throw new Error('State is required.');
	}

	if (!zip_code) {
		throw new Error('zip_code is required.');
	}

	return address;
};

export { createMakeAddress };
