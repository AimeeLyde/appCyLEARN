import React from 'react';

const CourseCard = ({ courseId, title, description, level, isFinished, onFinish }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white min-h-[200px] max-h-[200px] overflow-hidden">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2 line-clamp-3">{description}</p>
      <div className="flex space-x-2">
        <span className="text-sm text-white bg-blue-500 rounded-full px-2 py-1">{level}</span>
        {isFinished && <span className="text-sm text-white bg-green-500 rounded-full px-2 py-1">Fini</span>}
      </div>
      {/* <button onClick={() => onFinish(courseId)} className="mt-2 bg-green-500 text-white p-2 rounded-md">
        Fini
      </button> */}
    </div>
  );
};

export default CourseCard;