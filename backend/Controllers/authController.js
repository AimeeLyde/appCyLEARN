import User from '../models/UserSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const generateToken = user =>{
    return jwt.sign({id:user._id}, process.env.JWT_SECRET_KEY,{
        expiresIn:'15d'
    })
}

export const register = async(req, res)=>{

    const {name, email, password } = req.body

    try {
        let user = null

        user = await User.findOne({ email })
        // Vérifier si l'utilisateur existe
        if (user) {
            return res.status(400).json({message: 'Utilisateur existe déjà'})
        }

        // Hash mot de passe
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        user = new User({
            name, email, password:hashPassword
        });

        await user.save();

        res
        .status(200)
        .json({success:true, message:'User successfully created'})
        
    } catch (err) {
        res
        .status(500)
        .json({success:false, message:'Erreur de serveur, essaye encore'})
    }
};
export const login = async(req,res)=>{
    const {email} = req.body
    try {
        
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({message: "Utilisateur non trouvé"})
        }
        const isPasswordMatch = await bcrypt.compare(
            req.body.password, 
            user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({status:false, message:"email ou mdp incorrect"});
        }

        const token = generateToken(user)
        const {password, ...rest} = user._doc

        res.status(200).json({ status:true, message:'Connexion réussie',token,data:{...rest}})
        

    } catch (err) {
        res.status(500).json({ status:false, message:"Echec de la connexion" });
    }
}