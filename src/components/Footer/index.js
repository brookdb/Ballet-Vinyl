//libraries
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Flip } from 'gsap/all';

//components
import Ticker from "../Ticker";
import withTextAnimation from "../HOC/withTextAnimation";


//style
import "./styles.css";

//import { ArrowRight } from 'react-bootstrap-icons';

gsap.registerPlugin(Flip, ScrollTrigger);
// HOC for animating any text
const scrollTrigger = {
  start: "bottom bottom",
  marker: true,
};
const H3TL ={
  y: -15,
}
const AnimatedH3 = withTextAnimation(({ children, className, scrollTrigger, timeline}) => <h3 className={className} scrollTrigger={scrollTrigger} timeline={timeline}>{children}</h3>);

const Footer = () => {
  const FooterRef = useRef();


  const tickerTL = {
    xPercent: -100,
  }
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        let footerEl = FooterRef.current;
        

        // Create Timeline
        const tl = gsap.timeline({ delay: 0.2 });

       
         

        return () => ctx.revert();
    });
    }, []);

  return (
        <div id="footer" ref={FooterRef}>
            <div className="spacer-small"></div>
            <div className="social-media">
              <ul>
                <li><a href="#">INSTAGRAM</a></li>
                <li><a href="#">DISCOGS</a></li>
                <li><a href="#">YOUTUBE</a></li>
              </ul>
            </div>
            <AnimatedH3 className="credits" scrollTrigger={scrollTrigger} timeline={H3TL}>Created by <a href="https://github.com/brookdb">Brook Daba</a></AnimatedH3>
            <Ticker v={50} timeline={tickerTL}  className={"ticker"}>
              <li className="img-wrapper">
                <img src="https://i.imgur.com/yUacrXq.png"/>
              </li>
              <li>Ballet</li>
              <li className="img-wrapper">
                  <img src="https://i.imgur.com/KMhy5j3.png"/>
              </li>
              <li>Vinyl</li>
            </Ticker>

        </div>
  );
};

export default Footer;