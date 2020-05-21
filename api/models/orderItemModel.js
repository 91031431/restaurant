import mongoose from 'mongoose';

//Schema Order Item
const Schema = mongoose.Schema;
export const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    MealId: { type: String, required: true },
    OrderId: { type: String, required: true },
    Quantity: { type: Number, required: true },
    TotalPrice: { type: Number, required: true }
});