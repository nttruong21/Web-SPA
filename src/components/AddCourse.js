import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAddCourseSubmit = (e) => {
    e.preventDefault();
    const course = { title, description };
    fetch("http://localhost:3001/courses/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    }).then(() => {
      console.log("Add course successfully");
      navigate("/home");
    });
  };

  return (
    <div className="add-course">
      <h2>Add a New Course</h2>
      <form onSubmit={handleAddCourseSubmit}>
        <label>Course title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Course description:</label>
        <textarea
          rows="6"
          cols="50"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default AddCourse;
