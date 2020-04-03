import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
	return this.toString();
};

const SupplierStatusSchema = new Schema({
	status: {
		type: String,
		required: true,
	},
	dateCreated: {
		type: String,
	},
	timeCreated: {
		type: String,
	},
});

export default mongoose.model('SupplierStatus', SupplierStatusSchema);
