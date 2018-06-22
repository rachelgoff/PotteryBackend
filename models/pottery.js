import mongoose, { Schema } from 'mongoose';

var potterySchema = new Schema({
    pottery_id: String,
    key: String,
    potteryName: String,
    clayBody: String,
    weight: Number,
    height: Number,
    width: Number,
    dates: Array,
    time: Array,
    notes: String,
    firingDate: Array,
    firingType: Array,
    glazeDate: Array,
    glazeType: String,
    surfaceTreatment: String
});

export default mongoose.model('pottery', potterySchema);