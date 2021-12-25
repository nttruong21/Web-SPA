import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courses }) => {
  return (
    <React.Fragment>
      <Link className="add-course-text" to="/add-course">
        Add course
      </Link>
      <div className="course-list">
        {courses.map((course) => (
          <Link
            className="course-preview"
            key={course.id}
            to={{ pathname: `/courses/${course.id}` }}
          >
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};
export default CourseList;
