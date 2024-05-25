import Cours from "../models/CoursSchema.js"


export const getAllCourses = async(req, res)=>{
    try {
        const courses = await Cours.find({});
        res.status(200).json({
            success: true,
            message:"Tous les cours trouvés",
            data: courses
        })
    } catch (err) {
        res.status(500).json({ success: false, message: "Aucun cours trouvé" })
    }

}

// export const getQuizzesByCourse = async (req, res) => {
//   const coursID = req.params.coursID; // ID of the course
//     try {
    
//       const cours = await Quiz.findById(coursID).populate('quizzes'); // Filter by coursID
//       console.log(cours)
//       res.status(200).json({
//         success: true,
//         message: "Quiz trouvé",
//         data: cours
//     })
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   };