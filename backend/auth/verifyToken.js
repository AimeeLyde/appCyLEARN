import jwt from 'jsonwebtoken'
import User from '../models/UserSchema.js'

export const authenticate = async (req, res, next)=>{
    // récupérer le token depuis le  headers
    const authToken = req.headers.authorization

    // check token is exists
    if(!authToken || !authToken.startsWith('Bearer')){
        return res
        .status(401)
        .json({ success: false, message: "Pas de token, autorisation refusée" });
    }
    try {
        const token = authToken.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        // enleve l'id et le score du user
        req.userId = decoded.userId
        req.role = decoded.role
        next();
    } catch (err) {
        if (err.name ==='TokenExpiredError') {
            return res.status(401).json({message: "Token expiré"});
        }
        return res.status(401).json({ success: false, message: "Token invalide" });
    }
};
// Est ce qu'un user peut modifier un quiz ou une réponse de quiz en particulier ? 



// export const restrict = async(req, res, next)=>{
//     const userId = req.userId
//     let user;

// }