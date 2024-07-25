import mongoose, {Document, Schema, Model} from 'mongoose';

interface IFavoriteItem {
    productId: mongoose.Types.ObjectId;
    addedAt: Date;
}

interface IFavorites extends Document {
    userId: mongoose.Types.ObjectId;
    items: IFavoriteItem[];
    createdAt: Date;
    updatedAt: Date;
}

const FavoriteItemSchema: Schema = new Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});

const FavoritesSchema: Schema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [FavoriteItemSchema],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Favorites: Model<IFavorites> = mongoose.model<IFavorites>('Favorites', FavoritesSchema);
export default Favorites;