import { useEffect } from "react";

function useInfiniteScroll(loader, toNextPage) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          toNextPage();
        }
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
      },
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, toNextPage]);
}

export default useInfiniteScroll;
