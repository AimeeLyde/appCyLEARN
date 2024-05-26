import Glossaire from "../models/glossaireSchema.js"

export const getGlossaire = async(req, res)=>{
    try {
        const glossaries = await Glossaire.find({})
        res.status(200).json({
            success: true,
            message: "Le glossaire",
            data: glossaries
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucune données" })
    }
}