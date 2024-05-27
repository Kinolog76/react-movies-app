import { Routes, Route } from "react-router-dom";
import { createContext, lazy, useState, useEffect } from "react";

const Home = lazy(() => import("./pages/Home"));
const Popular = lazy(() => import("./pages/Popular"));
const NowPlaying = lazy(() => import("./pages/NowPlaying"));
const TopRated = lazy(() => import("./pages/TopRated"));
const Upcoming = lazy(() => import("./pages/Upcoming"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const Genre = lazy(() => import("./pages/Genre"));
import Layout from "./components/Layout";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="popular" element={<Popular />} />
            <Route path="now-playing" element={<NowPlaying />} />
            <Route path="top-rated" element={<TopRated />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="movie/:id" element={<MoviePage />} />
            <Route path="genre/:id" element={<Genre />} />
            <Route path="*" element={<Popular />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
