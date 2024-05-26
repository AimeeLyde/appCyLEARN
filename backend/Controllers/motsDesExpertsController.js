import MotsDesExperts from "../models/motsDesExpertsSchema.js"

export const getWordsExperts = async(req, res)=>{
    try {
        const wordsExperts = await MotsDesExperts.find({})
        res.status(200).json({
            success: true,
            message: "Les mots des experts",
            data: wordsExperts
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucune données" })
    }
}