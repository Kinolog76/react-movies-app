import ContentLoader from "react-content-loader";
import styles from "./MovieCard.module.css";

const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    className={styles.root}
    viewBox="0 0 280 364"
    backgroundColor="#e0e0e0"
    foregroundColor="#e0e0e0"
    {...props}>
    <rect x="0" y="0" rx="10" ry="10" width="280" height="366" />
  </ContentLoader>
);

export default Skeleton;
