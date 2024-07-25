import mongoose, {Document, Schema, Model} from 'mongoose';

interface IProduct extends Document {
    code: string;
    name: string;
    description?: string;
    price: string;
    specialPrice?: string; // price at offer
    slug: string;
    mainImage: string;
    galleryImages?: string[];
    categoryId: mongoose.Types.ObjectId;
    subCategoryId?: mongoose.Types.ObjectId;
    specifications?: mongoose.Types.ObjectId;
    comments: mongoose.Types.ObjectId;
    quantity: number;
    soldQuantity: number;
    isActive: boolean;
    isInStock: boolean;
    relatedProducts: mongoose.Types.ObjectId[];
    colors?: string[];
    sizes?: string[];
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    specialPrice: {
        type: Number
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    mainImage: {
        type: String,
        required: true
    },
    galleryImages: [{
        type: String
    }],
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subCategoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'SubCategory'
    },
    specifications: {
        type: mongoose.Types.ObjectId,
        ref: 'Specification',
        required: false
    },
    comments: {
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    soldQuantity: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isInStock: {
        type: Boolean,
        default: true
    },
    relatedProducts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],
    colors: [{
        type: String
    }],
    sizes: [{
        type: String
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

const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);
export default Product;