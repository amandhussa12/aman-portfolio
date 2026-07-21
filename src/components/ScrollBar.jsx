import React, { useEffect, useState } from "react";
import "./ScrollBar.css";

function ScrollBar() {

  const [scroll, setScroll] = useState(0);


  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


      const progress = (scrollTop / height) * 100;

      setScroll(progress);

    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  return (
    <div
      className="scroll-bar"
      style={{ width: `${scroll}%` }}
    ></div>
  );

}


export default ScrollBar;