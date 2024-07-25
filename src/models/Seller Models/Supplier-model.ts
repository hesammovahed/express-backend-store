import mongoose, {Document, Schema, Model} from 'mongoose';

interface ISupplier extends Document {
    name: string;
    contactInfo: string;
    rating: number;
    isApproved: boolean;
    products: mongoose.Types.ObjectId[];
    totalSales: number;
    userComments: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const SupplierSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    products: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],
    totalSales: {
        type: Number,
        default: 0
    },
    userComments: [{
        type: mongoose.Types.ObjectId,
        ref: 'ProductComment'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Supplier: Model<ISupplier> = mongoose.model<ISupplier>('Supplier', SupplierSchema);
export default Supplier;
