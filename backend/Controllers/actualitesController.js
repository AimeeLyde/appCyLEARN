import Actualites from "../models/ActualitesSchema.js"

export const getActualites = async(req, res)=>{
    try {
        const actualities = await Actualites.find({})
        res.status(200).json({
            success: true,
            message: "Les actualites",
            data: actualities
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucune données" })
    }
}