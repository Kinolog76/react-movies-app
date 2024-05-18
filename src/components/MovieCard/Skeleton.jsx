import ContentLoader from "react-content-loader";
import styles from "./MovieCard.module.css";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    className={styles.root}
    viewBox="0 0 350 365"
    backgroundColor="#e8e8e8"
    foregroundColor="#e0e0e0"
    {...props}>
    <rect x="8" y="52" rx="15" ry="15" width="277" height="348" />
    <rect x="295" y="536" rx="0" ry="0" width="28" height="3" />
  </ContentLoader>
);

export default Skeleton;
