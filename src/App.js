import CourseCard from "./components/Course/CourseCard";
import CategoriesList from "./components/Category/CategoriesList";
import Header from "./components/Header";
import "./style.scss";
import React, { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const API = "http://localhost:3000";

  useEffect(() => {
    fetch(`${API}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch(`${API}/courses`)
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  const changeMode = () => {
    setDarkMode("dark");
  };

  return (
    <div className={`global-container ${darkMode}`}>
      <main className="container">
        <Header />
        <section className="content">
          <aside className="content__categories">
            <div className="categories">
              <h3 className="categories__title">Categorias</h3>
              <CategoriesList categoriesList={categories} />
            </div>
            <div className="mode">
              <button onClick={changeMode}>Cambiar modo</button>
            </div>
          </aside>
          <article className="content__courses">
            {courses.map((course) => {
              return (
                <CourseCard
                  title={course.title}
                  description={course.description}
                  link={course.link}
                  key={course.id}
                />
              );
            })}
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
