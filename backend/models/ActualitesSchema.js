import mongoose from "mongoose";

const actualitesSchema = new mongoose.Schema({
    titre: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.model('Actualites', actualitesSchema);