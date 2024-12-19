import React, { useState } from 'react';
import './ListProgress.css';

const students = [
  { id: 1, name: '1 Nguyen Van A', course: 'ReactJS Basics', progress: '80%', avatar: 'avatar1.jpg' },
  { id: 2, name: '2 Le Thi B', course: 'NodeJS Advanced', progress: '60%', avatar: 'avatar2.jpg' },
  { id: 3, name: '3 Nguyen Van A', course: 'ReactJS Basics', progress: '80%', avatar: 'avatar1.jpg' },
  { id: 4, name: '4 Le Thi B', course: 'NodeJS Advanced', progress: '60%', avatar: 'avatar2.jpg' },
  { id: 5, name: '5 Nguyen Van A', course: 'ReactJS Basics', progress: '80%', avatar: 'avatar1.jpg' },
  { id: 6, name: '6 Le Thi B', course: 'NodeJS Advanced', progress: '60%', avatar: 'avatar2.jpg' },
  { id: 7, name: '7 Nguyen Van A', course: 'ReactJS Basics', progress: '80%', avatar: 'avatar1.jpg' },
  { id: 8, name: '8 Le Thi B', course: 'NodeJS Advanced', progress: '60%', avatar: 'avatar2.jpg' },
  { id: 9, name: '9 Nguyen Van A', course: 'ReactJS Basics', progress: '80%', avatar: 'avatar1.jpg' },
  { id: 10, name: '10 Le Thi B', course: 'NodeJS Advanced', progress: '60%', avatar: 'avatar2.jpg' },
  { id: 11, name: '11 Nguyen Van A', course: 'ReactJS Basics', progress: '80%', avatar: 'avatar1.jpg' },
  { id: 12, name: '12 Le Thi B', course: 'NodeJS Advanced', progress: '60%', avatar: 'avatar2.jpg' },
  // Add more students here
];

const StudentList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) =>
      direction === 'next' ? prevPage + 1 : Math.max(prevPage - 1, 1)
    );
  };

  const paginatedStudents = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="student-list">
      <h2 className="title">Tiến Độ Học Tập</h2>
      <div className="student-items">
        {paginatedStudents.map((student) => (
          <div className="student-item" key={student.id}>
            <img src={student.avatar} alt={student.name} className="student-avatar" />
            <div className="student-info">
              <h3 className="student-name">{student.name}</h3>
              <p className="student-course">{student.course}</p>
              <p className="student-progress">Tiến độ: {student.progress}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => handlePageChange('prev')} 
          disabled={currentPage === 1}
        >
          Trước
        </button>
        <button 
          onClick={() => handlePageChange('next')} 
          disabled={currentPage * itemsPerPage >= students.length}
        >
          Tiếp
        </button>
      </div>
    </div>
  );
};

export default StudentList;
