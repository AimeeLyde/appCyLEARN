import mongoose from "mongoose";

const bonnesPratiquesSchema = new mongoose.Schema({
    titre: {
        type: String, 
        required: true
    },
    explication: {
        type: String,
        required: true
    }
});

export default mongoose.model('BonnesPratiques', bonnesPratiquesSchema);