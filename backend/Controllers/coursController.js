import Cours from "../models/CoursSchema.js";
import User from "../models/UserSchema.js"; 

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Cours.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const finishCourse = async (req, res) => {
  const { userId, courseId } = req.body;
  console.log('Request Body:', req.body); // Ajoutez ce log pour vérifier ce qui est reçu
  try {
    const user = await User.findById(userId);
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }
    console.log('User before update:', user);
    console.log('Course ID:', courseId);
    const courseIndex = user.finishedCourses.indexOf(courseId);
    if (courseIndex === -1) {
      user.finishedCourses.push(courseId);
    } else {
      user.finishedCourses.splice(courseIndex, 1);
    }
    await user.save();
    console.log('User after update:', user);
    res.status(200).json({ message: "Course marked as finished/unfinished", finishedCourses: user.finishedCourses });
  } catch (err) {
    console.error('Error in finishCourse controller:', err);
    res.status(500).json({ message: err.message });
  }
};
