import Quiz from '../models/QuizSchema.js';  
import User from '../models/UserSchema.js';  

const calculateExp=(level)=>{
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

export const answer = async(req,res)=>{
    try {
        const { quizId } = req.params;
        const { userId, responses } = req.body;  

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz non trouvé' });
    }

    let correctAnswersCount = 0;

    // Validation des réponses de l'utilisateur
    quiz.questions.forEach((question, index) => {
      const userResponse = responses[index];
      const correctOption = question.options.find(option => option.isCorrect);

      if (correctOption.text === userResponse) {
        correctAnswersCount += 1;
      }
    });

    const isQuizPassed = correctAnswersCount >= 2;
    let expGained = 0;

    if (isQuizPassed) {
      expGained = calculateExp(quiz.niveau);

      // Mise à jour du score de l'utilisateur
      const user = await User.findById(userId);
      if (user) {
        user.exp += expGained;
        await user.save();
      }
    }

    return res.status(200).json({
      message: isQuizPassed ? 'Quiz validé' : 'Quiz non validé',
      expGained,
      isQuizPassed
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur du serveur' });
  }
}