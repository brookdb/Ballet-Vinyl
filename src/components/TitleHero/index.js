//libraries
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Flip } from 'gsap/all';

//style
import "./styles.css";

//import { ArrowRight } from 'react-bootstrap-icons';

gsap.registerPlugin(Flip, ScrollTrigger);

const TitleHero = () => {
  const TitleRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        let titleEl = TitleRef.current;
        let textl = titleEl.querySelector('.text-left');
        let textr = titleEl.querySelector('.text-right');

        // Create Timeline
        const tl = gsap.timeline({ delay: 0.2 });

        tl.fromTo([textl, textr], { 
            y: '34vh',
        }, { 
            opacity: 1,
             y: '54vh',
            duration: 1
        });

        

        const tl2 = gsap.timeline({
            scrollTrigger: {
                    trigger: titleEl,
                    start: 'top top',
                    end: '+=550 center',
                    scrub: true,
                    markers: false,
                },
         });

         tl2.to([textl, textr], {
            y: (i, target) => {
                  const maxTop = (200 + i*50); // stopping point, you can adjust this
                  const currentTop = target.getBoundingClientRect().top;
                  return `-=${Math.min(currentTop, currentTop - maxTop)}px`;
                },
        });
         

        return () => ctx.revert();
    });
    }, []);

  return (
        <div id="title-hero" ref={TitleRef}>
            <p className="text-left">Ballet</p>
            <p className="text-right">Vinyles</p>
            <div className="arrow-wrapper">
                
            </div>
        </div>
  );
};

export default TitleHero;