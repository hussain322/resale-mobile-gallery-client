import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}- Resale Mobile Gallery`;
  }, [title]);
};

export default useTitle;
