import mongoose, {Document, Schema, Model} from 'mongoose';

interface ICartItem {
    productId: mongoose.Types.ObjectId;
    quantity: number;
    color?: string;
    size?: string;
    supplier?: string;
}

interface ICart extends Document {
    userId: mongoose.Types.ObjectId;
    items: ICartItem[];
    totalQuantity: number;
    totalPrice: number;
    createdAt: Date;
    updatedAt: Date;
}

const CartItemSchema: Schema = new Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    supplier: {
        type: String
    }
});

const CartSchema: Schema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [CartItemSchema],
    totalQuantity: {
        type: Number,
        default: 0
    },
    totalPrice: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date, default: Date.now
    }
});

const Cart: Model<ICart> = mongoose.model<ICart>('Cart', CartSchema);
export default Cart;