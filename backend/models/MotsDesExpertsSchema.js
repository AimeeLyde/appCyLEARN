import mongoose from "mongoose";
const motDesExpertsSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    explication: {
        type: String,
        required: true
    }
});

export default mongoose.model('MotDesExperts', motDesExpertsSchema);
