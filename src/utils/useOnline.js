import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const HandleOnline = () => {
      setIsOnline(true);
    };
    const HandleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("Online", HandleOnline);
    window.addEventListener("Offline", HandleOffline);

    return () => {
      window.removeEventListener("Online", HandleOnline);
      window.removeEventListener("Offline", HandleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
