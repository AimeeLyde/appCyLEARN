import React, { useContext, useState, useEffect } from 'react'; 
import { authContext } from '../../context/AuthContext';
import { BASE_URL } from '../../config';
import userImg from "../../assets/images/debutant.png";
import niveau3Img from "../../assets/images/novice.png";
import niveau4Img from "../../assets/images/expert.png";
import CourseCard from '../../component/Courses/CoursesCard';
import axios from 'axios';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; // Importer SweetAlert2

const MyAccount = () => {
  const { user, dispatch } = useContext(authContext);
  const [tab, setTab] = useState('cours');
  const [filterLevel, setFilterLevel] = useState('Tous');
  const [courses, setCourses] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [responses, setResponses] = useState([]);
  const [result, setResult] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cours`);
        setCourses(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des cours', error);
      }
    };

    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/quiz`);
        console.log('Réponse de l\'API des quiz:', response.data);
        setQuizzes(response.data.data || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des quiz', error);
      }
    };

    fetchCourses();
    fetchQuizzes();
  }, []);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const filteredCourses = filterLevel === 'Tous' ? courses : courses.filter(course => course.level === filterLevel);

  const handleFinishCourse = async (courseId) => {
    console.log('ID du cours dans handleFinishCourse:', courseId);
    if (!courseId) return;
    try {
      const response = await axios.post(`${BASE_URL}/cours/finishCourse`, { userId: user._id, courseId });
      console.log('Réponse de l\'API:', response.data);
      const updatedUser = { ...user, finishedCourses: response.data.finishedCourses };
      dispatch({ type: 'UPDATE_USER', payload: updatedUser });
      setSelectedCourse(null);
    } catch (error) {
      console.error('Erreur lors de la finalisation du cours', error);
    }
  };

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setResponses(Array(quiz.questions.length).fill(''));
    setCurrentQuestionIndex(0);
  };

  const handleQuizResponseChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmitQuiz = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/quiz/${selectedQuiz._id}/respond`, {
        userId: user._id,
        responses,
      });
      setResult(response.data);
      if (response.data.updatedUser) {
        dispatch({ type: 'UPDATE_USER', payload: response.data.updatedUser });
      }

      // Réinitialiser l'état du quiz sélectionné avant d'afficher la SweetAlert
      setSelectedQuiz(null);

      // Afficher une alerte SweetAlert2 après la soumission
      Swal.fire({
        title: response.data.isQuizPassed ? 'Quiz validé' : 'Quiz non validé',
        text: `${response.data.message}: ${response.data.expGained}`,
        icon: response.data.isQuizPassed ? 'success' : 'error',
        confirmButtonText: 'OK'
      });

    } catch (error) {
      console.error('Erreur lors de la soumission du quiz', error);
      Swal.fire({
        title: 'Erreur',
        text: 'Une erreur est survenue lors de la soumission du quiz',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };
  const getUserImage = (exp) => {
    if (exp >= 1000) {
      return niveau4Img;
    } else if (exp >= 400) {
      return niveau3Img;
    } else if (exp >= 200) {
      return userImg;
    } else {
      return userImg;
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className="grid md:grid-cols-6 gap-10">
        <div className='col-span-1 bg-white p-6 rounded-md shadow-lg'>
          <div className='flex items-center justify-center'>
            <figure className="w-[120px] h-[120px] rounded-full border-4 border-solid border-primaryColor">
              <img src={getUserImage(user?.exp || 0)} alt="badge" className='w-full h-full rounded-full' />
            </figure>
          </div>
          <div className="text-center mt-6">
            <h3 className='text-[20px] leading-[30px] font-bold'>
               <span className='text-blue-500'>{user?.exp || 0}</span>  exp
            </h3><br />
            <h2 className='text-textColor text-[22px] leading-6 font-medium'> {user?.name || 'Utilisateur'} </h2> <br />
            <p className="text-center text-textColor text-[12px] font-medium">{user?.email}</p>
          </div>
          <div className="mt-[60px]">
            <button onClick={handleLogout} className='w-full bg-[#181A13] p-4 text-[16px] leading-7 rounded-md text-white'>
              Déconnexion
            </button>
            <button className='w-full bg-red-600 mt-4 p-2 text-[10px] rounded-md text-white'>
              Supprimer mon compte
            </button>
          </div>
        </div>

        <div className="md:col-span-5 bg-white p-6 rounded-md shadow-lg">
          <div className="flex space-x-4 mb-6">
            <button onClick={() => setTab('cours')} className={`${tab === 'cours' && "bg-primaryColor text-white"} p-3 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
              Cours
            </button>
            <button onClick={() => setTab('quiz')} className={`${tab === 'quiz' && "bg-primaryColor text-white"} p-3 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
              Quiz
            </button>
          </div>

          {tab === 'cours' && (
            <div>
              <div className="flex justify-start mb-4 space-x-4">
                {['Tous', 'Débutant', 'Intermédiaire', 'Avancé'].map(level => (
                  <button
                    key={level}
                    onClick={() => setFilterLevel(level)}
                    className={`p-3 rounded-md ${filterLevel === level ? 'bg-primaryColor text-white' : 'bg-gray-200'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <div className="h-[500px] overflow-y-scroll">
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredCourses.map((course) => (
                    <div key={course._id} className="cursor-pointer" onClick={() => setSelectedCourse(course)}>
                      <CourseCard
                        courseId={course._id}
                        title={course.title}
                        description={course.description}
                        level={course.level}
                        isFinished={user?.finishedCourses?.includes(course._id)}
                        onFinish={handleFinishCourse}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === 'quiz' && (
            <div className="h-[500px] overflow-y-scroll">
              <div className="grid md:grid-cols-2 gap-6">
                {quizzes.map((quiz, index) => (
                  <div
                    key={quiz._id}
                    className={`cursor-pointer p-4 rounded-lg shadow-lg ${index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'}`}
                    onClick={() => handleSelectQuiz(quiz)}
                  >
                    <h3 className="text-lg font-bold mb-2">{quiz.title}</h3>
                    <p className="text-gray-700 mb-2">Niveau: {quiz.niveau}</p>
                    <p className="text-gray-700 mb-2">Nombre de questions: {quiz.questions.length}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedCourse && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center px-4"
        >
          <div className="bg-white p-8 rounded-md max-w-3xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedCourse.title}</h2>
            <p className="mb-4">{selectedCourse.description}</p>
            <span className="text-sm text-white bg-blue-500 rounded-full px-2 py-1 mb-4">{selectedCourse.level}</span>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => handleFinishCourse(selectedCourse._id)}
                className="bg-green-500 text-white p-2 rounded-md"
              >
                Fini
              </button>
              <button
                onClick={() => setSelectedCourse(null)}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Fermer
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {selectedQuiz && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center px-4"
        >
          <div className="bg-white p-8 rounded-md max-w-3xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedQuiz.title}</h2>
            <div className="mb-4">
              <p className="text-lg mb-2">{selectedQuiz.questions[currentQuestionIndex].text}</p>
              {selectedQuiz.questions[currentQuestionIndex].options.map((option, i) => (
                <label key={i} className="block mb-2">
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option.text}
                    checked={responses[currentQuestionIndex] === option.text}
                    onChange={(e) => handleQuizResponseChange(currentQuestionIndex, e.target.value)}
                    className="mr-2"
                  />
                  {option.text}
                </label>
              ))}
            </div>
            <div className="flex justify-between space-x-4">
              <button
                onClick={handlePreviousQuestion}
                className={`bg-gray-500 text-white p-2 rounded-md ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentQuestionIndex === 0}
              >
                Précédent
              </button>
              {currentQuestionIndex < selectedQuiz.questions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className="bg-blue-500 text-white p-2 rounded-md"
                >
                  Suivant
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="bg-green-500 text-white p-2 rounded-md"
                >
                  Soumettre
                </button>
              )}
            </div>
            <button
              onClick={() => setSelectedQuiz(null)}
              className="bg-red-500 text-white p-2 rounded-md mt-4"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default MyAccount;
