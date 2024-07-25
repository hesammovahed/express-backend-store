import mongoose, {Document, Schema, Model} from 'mongoose';

interface IOrderItem {
    productId: mongoose.Types.ObjectId;
    quantity: number;
    price: number;
    color?: string;
    size?: string;
    supplier?: string;
}

interface IOrder extends Document {
    userId: mongoose.Types.ObjectId;
    items: IOrderItem[];
    totalAmount: number;
    paymentStatus: 'pending' | 'completed' | 'failed';
    orderStatus: 'pending' | 'shipped' | 'delivered' | 'canceled';
    shippingAddress: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        phone: string;
    };
    billingAddress: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        phone: string;
    };
    paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer';
    paymentDetails?: {
        transactionId: string;
        paymentDate: Date;
    };
    createdAt: Date;
    updatedAt: Date;
}

const OrderItemSchema: Schema = new Schema({
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
    price: {
        type: Number,
        required: true
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

const OrderSchema: Schema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [OrderItemSchema],
    totalAmount: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'canceled'],
        default: 'pending'
    },
    shippingAddress: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        postalCode: {type: String, required: true},
        country: {type: String, required: true},
        phone: {type: String, required: true}
    },
    billingAddress: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        postalCode: {type: String, required: true},
        country: {type: String, required: true},
        phone: {type: String, required: true}
    },
    paymentMethod: {
        type: String,
        enum: ['credit_card', 'paypal', 'bank_transfer'],
        required: true
    },
    paymentDetails: {
        transactionId: {type: String},
        paymentDate: {type: Date}
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

const Order: Model<IOrder> = mongoose.model<IOrder>('Order', OrderSchema);
export default Order;
