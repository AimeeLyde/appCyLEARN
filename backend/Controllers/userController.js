import User from "../models/UserSchema.js";
export const deleteUser = async(req, res) =>{
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(
            id,
        );

        res.status(200).json({
            success: true,
            message: "Suppression effectuée",
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Echec de la suppression" })
    }
}

export const updateUser = async(req, res) =>{
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Mise à jour effectuée",
            data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Echec de la mise à jour" });
    }
}

export const getSingleUser = async(req, res) =>{
    const id = req.params.id;
    try {
        const user = await User.findById(id).select("-password");

        res.status(200).json({
            success: true,
            message: "Utilisateur trouvé",
            data: user
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucun utilisateur trouvé" })
    }
}

export const getAllUser = async(req, res) =>{
    try {
        const users = await User.find({}).select("-password");

        res.status(200).json({
            success: true,
            message: "Utilisateurs trouvés",
            data: users
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucun utilisateur trouvé" })
    }
}