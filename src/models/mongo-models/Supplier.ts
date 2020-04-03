import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
	return this.toString();
};

const Supplierchema = new Schema({
	supplierNo: {
		type: String,
		required: true,
	},
	supplierName: {
		type: String,
		required: true,
	},
	tin: {
		type: String,
		required: true,
	},
	contactNumber: {
		type: String,
		required: true,
	},
	contactPerson: {
		type: String,
		required: true,
	},
	address: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
});

export default mongoose.model('Supplier', Supplierchema);
