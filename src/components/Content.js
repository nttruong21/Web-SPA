import React from "react";
import Home from "./Home";
import About from "./About";
import AddCourse from "./AddCourse";
import CourseDetail from "./CourseDetail";
import EditCourse from "./EditCourse";
import { Routes, Route, Navigate } from "react-router-dom";

function Main() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses/:id/edit-course" element={<EditCourse />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </React.Fragment>
  );
}
export default Main;
