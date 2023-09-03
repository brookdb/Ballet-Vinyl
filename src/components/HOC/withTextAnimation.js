//libraries
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//style
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const withTextAnimation = (WrappedComponent) => {
  return (props) => {
    const textRef = useRef();

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        gsap.set(textRef.current, { opacity: 0, y: 50 }); // Initial set

        gsap.to(textRef.current, {
          duration: 1,
          opacity: 1,
          y: -50,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            marker: true,
          },
        });
      }, textRef);

      return () => ctx.revert();
    }, []);

    return (
      <div className="animatedText" ref={textRef}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withTextAnimation;