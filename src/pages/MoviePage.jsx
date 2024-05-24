import { useParams } from "react-router-dom";

function MoviePage() {
  const { id } = useParams();
  return <h1>MoviePage - {id}</h1>;
}

export default MoviePage;
