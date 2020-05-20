import mongoose from 'mongoose';

//Schema User
const Schema = mongoose.Schema;
export const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    Phone: { type: String, required: true },
    Name: { type: String, required: true },
    Address: { type: String, required: true }
});
