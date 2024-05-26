import BonnesPratiques from "../models/BonnesPratiquesSchema.js"

export const getBonnesPratiques = async(req, res)=>{
    try {
        const bonnesPratiques = await BonnesPratiques.find({})
        res.status(200).json({
            success: true,
            message: "Les bonnes pratiques",
            data: bonnesPratiques
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucune données" })
    }
}