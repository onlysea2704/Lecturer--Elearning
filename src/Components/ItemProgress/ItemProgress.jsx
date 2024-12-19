import React, { useState } from 'react';
import './ItemProgress.css';

const ItemProgress = ({ student }) => {

    return (
        <div className="student-item" key={student.id}>
            <img src={student.avatar} alt={student.name} className="student-avatar" />
            <div className="student-info">
                <h3 className="student-name">{student.name}</h3>
                <p className="student-course">{student.course}</p>
                <p className="student-progress">Tiến độ: {student.progress}</p>
            </div>
        </div>
    );
};

export default ItemProgress;
