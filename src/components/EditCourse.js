import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EditCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let oldTitle = "";
  let oldDescription = "";
  fetch("http://localhost:3001/courses/" + id)
    .then((response) => response.json())
    .then((data) => {
      // setTitle(data.title);
      // setDescription(data.description);
      oldTitle = data.title;
      oldDescription = data.description;
      console.log(oldTitle, oldDescription);
    });
  console.log(oldTitle, oldDescription);
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);
  // setTitle("test title");
  // setDescription("test description");
  // console.log(counter);

  // console.log(id);
  // const {
  //   data: course,
  //   error,
  //   isPending,
  // } = useFetch("http://localhost:3001/courses/" + id);

  // console.log(course);
  // const [title, setTitle] = useState(course.title);
  // const [description, setDescription] = useState(course.description);

  // const handleSetTitle = (e) => setTitle(e.target.value);
  const handleEditCourse = (e) => {
    e.preventDefault();
    const course = { title, description };
    fetch("http://localhost:3001/courses/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    }).then(() => {
      console.log("Edit course successfully");
      navigate("/courses/" + id);
    });
  };
  return (
    <div className="edit-course">
      <div>
        <h2>Edit Course</h2>
        <form onSubmit={handleEditCourse}>
          <label>Course title:</label>
          <input
            name="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Course description:</label>
          <textarea
            name="description"
            required
            rows="6"
            cols="50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button>Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
