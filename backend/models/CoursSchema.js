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
        enum: ['Débutant','Intermédiaire','Avancé'],
        required: true, }
});
export default mongoose.model("Cours", coursSchema);