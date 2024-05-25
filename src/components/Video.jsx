import ReactPlayer from "react-player/youtube";

function Video({ videos }) {
  console.log(videos);
  return (
    <>
      <ReactPlayer
        className="movie__video"
        url={`https://www.youtube.com/embed/${videos.key}`}
        playing
      />
    </>
  );
}

export default Video;
