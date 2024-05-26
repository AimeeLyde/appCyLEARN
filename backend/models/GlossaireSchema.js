import mongoose from "mongoose";
const glossaireSchema = new mongoose.Schema({
    mot: {
        type: String, 
        required: true
    },
    définition: {
        type: String,
        required: true
    }
});

export default mongoose.model('Glossaire', glossaireSchema);