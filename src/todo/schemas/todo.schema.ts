import mongoose, { Schema } from "mongoose";

export const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean,
    createAt:{type: Date, default: Date.now}
})