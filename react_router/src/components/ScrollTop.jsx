import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const pathName = useLocation();
  useEffect(() => {
    window && window.scroll(0, 0);
    console.log("scroll TOP");
  }, [pathName]);
};

export default ScrollTop;
