import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
	return this.toString();
};

const AddressSchema = new Schema({
	building_name: {
		type: String,
		required: true,
	},
	street: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	zip_code: {
		type: String,
		required: true,
	},
});

export default mongoose.model('Address', AddressSchema);
