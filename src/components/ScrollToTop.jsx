import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);

    setTimeout(() => {
      window.scroll(0, 0);
    }, 0);
  }, [pathname]);

  return children;
}
