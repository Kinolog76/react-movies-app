function InfiniteScroll({ loader }) {
  return (
    <div
      ref={loader}
      style={{
        height: "0px",
        marginTop: "-50px",
        position: "relative",
        zIndex: 100,
      }}></div>
  );
}
export default InfiniteScroll;
