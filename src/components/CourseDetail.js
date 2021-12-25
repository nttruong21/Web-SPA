import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./UseFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Get course with id
const CourseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: course,
    error,
    isPending,
  } = useFetch("http://localhost:3001/courses/" + id);

  // Handle delete course
  const handleDeleteCourse = () => {
    fetch("http://localhost:3001/courses/" + course.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/home");
    });
  };

  const handleEditCourse = (e) => {
    // navigate("/edit-course");
    e.preventDefault();
  };

  return (
    <div className="course-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {course && (
        <div className="course-detail">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <button className="btn btn-delete" onClick={handleDeleteCourse}>
            Delete
          </button>
          <Link
            className="edit-course-link"
            key={course}
            to={`/courses/${course.id}/edit-course`}
          >
            Edit
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
