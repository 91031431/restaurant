import mongoose from 'mongoose';

//Schema Booking
const Schema = mongoose.Schema;
export const bookingSchema = new Schema({
    _id: Schema.Types.ObjectId,
    NumberOfPeople: { type: Number, required: true },
    DateTime: { type: Date, required: true }
});