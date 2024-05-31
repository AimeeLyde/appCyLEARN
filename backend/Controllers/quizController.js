import Quiz from "../models/QuizSchema.js";

// Récupérer tous les quiz
export const getAllQuiz = async (req, res) => {
    try {
        const quizzes = await Quiz.find({});
        res.status(200).json({
            success: true,
            message: "Tous les quiz trouvés",
            data: quizzes
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucun quiz trouvé" });
    }
};

// Lire un quiz
export const getSingleQuiz = async (req, res) => {
    const id = req.params.id;
    try {
        const quiz = await Quiz.findById(id);
        res.status(200).json({
            success: true,
            message: "Voici le quiz",
            data: quiz
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucun quiz trouvé" });
    }
};
