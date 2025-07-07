// hooks/useDisableScroll.js
import { useEffect } from "react";

const useDisableScroll = (isDisabled) => {
  useEffect(() => {
    if (isDisabled) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Disable scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Re-enable scroll and restore position
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isDisabled]);
};

export default useDisableScroll;
