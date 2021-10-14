import CourseCard from "./components/Course/CourseCard";
import CategoriesList from "./components/Category/CategoriesList";
import Header from "./components/Header";
import "./style.scss";
import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const coursesFromApi = useFetch("courses");
  const categoriesFromApi = useFetch("categories");
  const [darkMode, setDarkMode] = useState(false);

  let globalClasses = "global-container";

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? (globalClasses += " dark") : globalClasses}>
      <main className="container">
        <Header />
        <section className="content">
          <aside className="content__categories">
            <div className="categories">
              <h3 className="categories__title">Categorias</h3>
              <CategoriesList categoriesList={categoriesFromApi} />
            </div>
            <div className="mode">
              <button onClick={toggleMode}>Cambiar modo</button>
            </div>
          </aside>
          <article className="content__courses">
            {coursesFromApi.map((course) => {
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
