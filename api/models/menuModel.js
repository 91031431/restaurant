import mongoose from 'mongoose';

//Schema Menu
const Schema = mongoose.Schema;
export const menuSchema = new Schema({
    __id: Schema.Types.ObjectId,
    MealName: { type: String, required: true },
    Ingredients: { type: String, required: true },
    Price: { type: Number, required: true },
    Picture: { type: String, required: true }
});