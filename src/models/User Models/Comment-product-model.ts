import mongoose, {Document, Schema, Model} from 'mongoose';

interface IProductComment extends Document {
    productId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    commentText: string;
    rating?: number;
    isApproved: boolean;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
    likeCount: number;
    dislikeCount: number;
    hasPurchased: boolean;
    supplierId?: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    replies: mongoose.Types.ObjectId[];
}

const ProductCommentSchema: Schema = new Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    commentText: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    likeCount: {
        type: Number,
        default: 0
    },
    dislikeCount: {
        type: Number,
        default: 0
    },
    hasPurchased: {
        type: Boolean,
        required: true
    },
    supplierId: {
        type: mongoose.Types.ObjectId,
        ref: 'Supplier'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    replies: [{
        type: mongoose.Types.ObjectId,
        ref: 'ProductComment'
    }]
});

const ProductComment: Model<IProductComment> = mongoose.model<IProductComment>('ProductComment', ProductCommentSchema);
export default ProductComment;
