//libraries
import React from "react";

//components
import Gallery from "./index";

const GalleryStack = ({items, caption}) => {
    //ID
    let id= 'gallery-stack';

    let classNames = 'gallery gallery--stack';

    //scrollTriger options
    let scrollTrigger = {
        start: 'top top',
        end: '+=1325', // This is where you can fine-tune the end point
        markers: false,
        anticipatePin: 1,
    }
    //class names (gallery, items, caption, focal item) and their coresponding timeline options

    let galleryElements = {
        items: {
            classNames: '.gallery__item',
            timeline: {
                x: (i, target) => {
                  const maxLeft = (35 + i*10); // stopping point, you can adjust this
                  const currentLeft = target.getBoundingClientRect().left;
                  console.log(currentLeft);
                  return `-=${Math.min(currentLeft, currentLeft - maxLeft)}px`;
                },
                ease: "none",
                stagger: {
                  amount: 0.2
                },
                opacity: 0.9,
              }
        },
    }
    //"url(https://images.unsplash.com/photo-1520156557489-31c63271fcd4)"
    /**  */
  return (
    <div className="gallery--stack-wrapper">
    <Gallery
        key="1"
        id={id}
        classNames={classNames}
        scrollTrigerOption={scrollTrigger}
        galleryElements={galleryElements}
    >
        {
            items.map((item) => (
                <div className="gallery__item" style={{ backgroundImage: `url(${item.url})`}}></div>
            ))
        }
        {
            caption &&
            <div className="gallery__item caption">
                {caption.header && <h1>{caption.header }</h1> }
                <p>{caption.text}</p>
            </div>
        }
    </Gallery>
    </div>
  );
};

export default GalleryStack;