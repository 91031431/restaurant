import mongoose from 'mongoose';

//Schema Order
const Schema = mongoose.Schema;
export const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    UserID: { type: String, required: true },
    TotalOrder: { type: Number, required: true }
});