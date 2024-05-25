import Quiz from "../models/QuizSchema.js";


// Récupérer tous les quiz
export const getAllQuiz = async(req, res)=>{
    try {
        const quizzes = await Quiz.find({})
        res.status(200).json({
            success: true,
            message: "Tous les quiz trouvés",
            data: quizzes
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucun quiz trouvé" })
    }
}





// Les quiz par niveau 

export const getQuizByLevel = async(req, res) =>{
    const level = req.params.niveau
    try {
        const quizzes = await Quiz.find({ niveau: level })
        res.status(200).json({
            success: true,
            message: "quiz par niveau",
            data: quizzes
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucun quiz trouvé" })
    }
}

// Répondre à quiz


// export const answerQuiz = async(req, res) =>{
//     const quizId = req.params.id;
//     const { questionId, selectedOptionId } = req.body;

//     try {
//         const quiz = await Quiz.findById(quizId);
//         if (!quiz) {
//             return res.status(404).json({ message: 'Quiz not found' });
//         }

//         // Find the question and selected option
//         const question = quiz.questions.id(questionId);
//         const selectedOption = question.options.id(selectedOptionId);

//         if (!question || !selectedOption) {
//             return res.status(400).json({ message: 'Question or option not found' });
//         }

//         // Check if the selected option is correct
//         if (selectedOption.isCorrect) {
//             req.user.score += 1; // Increment user's score by 1
//             await req.user.save(); // Save the updated user object

//             return res.json({ message: 'Correct answer! You earned a point.' });
//         } else {
//             return res.json({ message: 'Incorrect answer. Better luck next time.' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }


// Lire un quiz

export const getSingleQuiz = async(req, res)=>{
    const id = req.params.id;
    try {
        const quizzes = await Quiz.findById(id);
        res.status(200).json({
            success: true, 
            message: "voici quiz",
            data: quizzes
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucun quiz trouvé" })
    }
}