import { React, useEffect, useRef } from "react";
import Typed from 'typed.js'

const Introduction = () => {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Java Developer.", "MERN Developer.", "Backend Developer."],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100
      });
  
      return () => {
        typed.destroy();
      };
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <span className="sub-heading">HEY! I AM</span>
                <h1>Suryansh Shrivastava</h1>
                <h3>I'm a <span className="typer" ref={el}></span></h3>
            </div>
        </div>
    );
};

export default Introduction;