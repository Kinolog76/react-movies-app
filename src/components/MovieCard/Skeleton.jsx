import ContentLoader from "react-content-loader";
import styles from "./MovieCard.module.css";

const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    className={`movie__card`}
    viewBox="0 0 280 394"
    backgroundColor="#e0e0e0"
    foregroundColor="#e0e0e0"
    {...props}>
    <rect x="0" y="-1" rx="15" ry="15" width="280" height="394" />
  </ContentLoader>
);

export default Skeleton;
