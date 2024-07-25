import mongoose, {Document, Schema, Model} from 'mongoose';

interface IAddress extends Document {
    userId: mongoose.Types.ObjectId;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
}

const AddressSchema: Schema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const Address: Model<IAddress> = mongoose.model<IAddress>('Address', AddressSchema);
export default Address;
