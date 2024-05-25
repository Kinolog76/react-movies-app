import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import NowPlaying from "./pages/NowPlaying";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import MoviePage from "./pages/MoviePage";
import Layout from "./components/Layout";
import Genre from "./pages/Genre";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
