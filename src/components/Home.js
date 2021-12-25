import { useEffect, useState } from "react";
import CourseList from "./CourseList";
import useFetch from "./UseFetch";

// const Home = () => {
//   const [courses, setCourses] = useState(null);
//   useEffect(() => {
//     fetch("http://localhost:3001/courses")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setCourses(data);
//       });
//   }, []);

//   return (
//     <div className="home">
//       {courses && <CourseList courses={courses} title="Danh sách khóa học" />}
//     </div>
//   );
// };

const Home = () => {
  const {
    error,
    isPending,
    data: courses,
  } = useFetch("http://localhost:3001/courses");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {courses && <CourseList courses={courses} />}
    </div>
  );
};

export default Home;
