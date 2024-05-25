import mongoose from "mongoose";

const coursSchema = new mongoose.Schema({
    titre:{
        type: String, 
        required: true},
    description:{
        type: String,
        required: true },
    niveau:{ 
        type: String,
        enum: ['facile', 'moyen', 'difficile'],
        required: true, }
});
export default mongoose.model("Cours", coursSchema);