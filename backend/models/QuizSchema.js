import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
    options: [
      {
        text: {
          type: String,
          required: true,
        },
        isCorrect: {
          type: Boolean,
          required: true,
        },
      },
    ],
  });
  
  const QuizSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    questions: [questionSchema],
    niveau:{type: String, enum: ['facile', 'moyen', 'difficile'] }
  });
  
  
export default mongoose.model('Quiz', QuizSchema);