//libraries
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Flip } from 'gsap/all';

//style
import "./styles.css";

gsap.registerPlugin(Flip, ScrollTrigger);

const Gallery = ({ id, classNames, scrollTrigerOption, galleryElements, children }) => {
    const galleryRef = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //define the gallery element using ref
            let galleryEl = galleryRef.current;
            //define gallery elements
            const galleryItems = galleryEl.querySelectorAll(galleryElements.items.classNames);
            if (galleryElements.caption){
                var galleryCaption = galleryEl.querySelector(galleryElements.caption.classNames);
            }
            if (galleryElements.focal){
                var galleryFocalItem = galleryEl.querySelector(galleryElements.focal.classNames);
            }
            // Create Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: galleryEl,
                    start: 'center center',
                    end: '+=525', // This is where you can fine-tune the end point
                    pin: galleryEl,
                    pinSpacing: true,
                    scrub: true,
                    markers: false,
                    ...scrollTrigerOption
                },
            });
            
            // Animate Gallery Items - Non-Center
            tl.to(galleryItems, galleryElements.items.timeline,0);
            // Animate Focal Gallery Item (if any)
            if (galleryElements.focal){
                tl.to( galleryFocalItem, galleryElements.focal.timeline,0);
            }
            // Animate Caption
            if (galleryElements.caption){
                const tl2 = gsap.timeline({
                    scrollTrigger: {
                            trigger: galleryEl,
                            start: 'top top',
                            end: '+=550 center',
                            scrub: true,
                            markers: false,
                            ...scrollTrigerOption
                        },
                 });
                tl2.to(galleryCaption, galleryElements.caption.timeline);
            }
            
            return () => tl.kill();
        }, galleryRef);
        return () => ctx.revert();
    }, []);
    return (
        <section id={id} className={classNames} ref={galleryRef}>
        {children}
        </section>
    );
};

export default Gallery;
