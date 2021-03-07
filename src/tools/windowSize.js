import { useState, useEffect, useRef } from "react";

export function useWindowDimensions() {
  const getWindowDimensions = useRef( function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  })

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions.current());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions.current());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}