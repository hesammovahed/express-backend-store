import mongoose, {Document, Schema, Model} from 'mongoose';

interface IPayment extends Document {
    userId: mongoose.Types.ObjectId;
    orderId: mongoose.Types.ObjectId;
    amount: string;
    paymentMethod: string;
    status: string; // ( 'completed', 'pending', 'failed')
    transactionId?: string;
    paymentDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

const PaymentSchema: Schema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderId: {
        type: mongoose.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    transactionId: {
        type: String
    },
    paymentDate: {
        type: Date,
        required: true
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


const Payment: Model<IPayment> = mongoose.model<IPayment>('Payment', PaymentSchema);
export default Payment;