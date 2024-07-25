import mongoose, {Document, Schema, Model} from 'mongoose';

interface IDiscountCode extends Document {
    code: string;
    discountType: 'percentage' | 'fixed';
    discountValue: string;
    minPurchaseAmount?: number; // min price of cart
    startDate: Date;
    endDate: Date;
    usageLimit?: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const DiscountCodeSchema: Schema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    discountType: {
        type: String,
        enum: ['percentage', 'fixed'],
        required: true
    },
    discountValue: {
        type: Number,
        required: true
    },
    minPurchaseAmount: {
        type: String
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    usageLimit: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: true
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

const DiscountCode: Model<IDiscountCode> = mongoose.model<IDiscountCode>('DiscountCode', DiscountCodeSchema);
export default DiscountCode;