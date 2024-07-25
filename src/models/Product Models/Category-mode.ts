import mongoose, {Document, Schema, Model} from 'mongoose';

interface ICategory extends Document {
    name: string;
    description?: string;
    parentId?: mongoose.Types.ObjectId;
    children: mongoose.Types.ObjectId[];
    isVisible: boolean;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
}

const CategorySchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    parentId: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    children: [{
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }],
    isVisible: {
        type: Boolean,
        default: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
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

const Category: Model<ICategory> = mongoose.model<ICategory>('Category', CategorySchema);
export default Category;