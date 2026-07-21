import React, { useEffect, useState } from "react";
import "./ScrollProgress.css";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);


  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


      const scrollPercentage =
        (scrollTop / documentHeight) * 100;


      setScroll(scrollPercentage);

    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  }, []);


  return (

    <div
      className="scroll-progress"
      style={{
        width: `${scroll}%`
      }}
    ></div>

  );

}


export default ScrollProgress;