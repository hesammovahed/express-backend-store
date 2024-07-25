import mongoose, {Document, Schema, Model} from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    nationalId: string;
    birthDate: Date;
    role: string;
    isActive: boolean;
    addresses: mongoose.Types.ObjectId[];
    payments: mongoose.Types.ObjectId[];
    wallet: mongoose.Types.ObjectId;
    otp: string;
    otpExpires: Date;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    nationalId: {
        type: String,
        unique: true
    },
    birthDate: {
        type: Date,
        required: false
    },
    role: {
        type: String,
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    addresses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Address'
    }],
    payments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Payment'
    }],
    wallet: {
        type: mongoose.Types.ObjectId,
        ref: 'Wallet'
    },
    otp: {
        type: String
    },
    otpExpires: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
export default User;
