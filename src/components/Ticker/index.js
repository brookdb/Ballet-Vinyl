//libraries
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

//style
import "./style.css";

const Ticker = ({children, v, timeline, className}) => {
  const tickerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        const speed = v;
        let target = tickerRef.current;

        let original_html = target.innerHTML;
        console.log(original_html);
        let new_html = "<div class='ticker-items'>" + original_html + "</div>";

        target.innerHTML = new_html;
        target.innerHTML += new_html;
        let tickerWidth = document.querySelector(".ticker-items").offsetWidth;
        let initDuration = tickerWidth / speed;

        gsap.to(".ticker-items", {
            duration: initDuration,
            ease: "none",
            repeat: -1,
            ... timeline
        });
        return () => ctx.revert();
        });
    }, []);
  return (
    <div className="ticker--wrapper">
        <ul className={`ticker ${(className && className)}`} ref={tickerRef}>
             {children}
        </ul>
    </div>
  );
};

export default Ticker;