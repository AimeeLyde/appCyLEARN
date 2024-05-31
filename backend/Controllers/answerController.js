import Quiz from '../models/QuizSchema.js';  
import User from '../models/UserSchema.js';  

const calculateExp = (level) => {
    switch (level) {
        case 'facile':
            return 15;
        case 'moyen':
            return 25;
        case 'difficile':
            return 60;
        default:
            return 0;
    }
};

export const answer = async (req, res) => {
    try {
        const { quizId } = req.params;
        const { userId, responses } = req.body;

        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz non trouvé' });
        }

        let correctAnswersCount = 0;

        quiz.questions.forEach((question, index) => {
            const userResponse = responses[index];
            const correctOption = question.options.find(option => option.isCorrect);

            if (correctOption.text === userResponse) {
                correctAnswersCount += 1;
            }
        });

        const isQuizPassed = correctAnswersCount >= 2;
        let expGained = 0;
        let updatedUser = null;

        if (isQuizPassed) {
            expGained = calculateExp(quiz.niveau);

            const user = await User.findById(userId);
            if (user) {
                user.exp += expGained;
                updatedUser = await user.save();
            }
        }

        return res.status(200).json({
            message: isQuizPassed ? 'BRAVOO !!! Vous avez validé le Quiz, vous gagnez   ' : 'Quiz non validé',
            expGained,
            isQuizPassed,
            updatedUser  // les informations mises à jour de l'utilisateur dans la réponse
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
};