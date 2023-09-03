//Libraries
import React from "react";

//components
import Gallery from "./index";


const GalleryRow = () => {
    //ID
    let id= 'gallery1';

    let classNames = 'gallery gallery--row';

    //scrollTriger options
    let scrollTrigger = {
        start: 'center center',
        end: '+=1225', // This is where you can fine-tune the end point
        markers: false,
    }
    //class names (gallery, items, caption, focal item) and their coresponding timeline options

    let galleryElements = {
        items: {
            classNames: '.gallery__item:not(.gallery__item--center)',
            timeline: {
                width: `${5/3 * 20}vh`,
                aspectRatio: 2 / 3,
                height: `${2.5 * 20}vh`,
                filter: 'brightness(1)',
            }
        },
        caption: {
            classNames: '.caption',
            timeline: { bottom: '-50vh', opacity: 0 }
        },
        focal: {
            classNames: '.gallery__item--center',
            timeline: {
                width: `${2.5 * 20}vh`,
                height: `${3.75 * 20}vh`,
                filter: 'brightness(1)',
            }
        }
    }
    return (
        <Gallery
          key="0"
          id={id}
          scrollTrigerOption={scrollTrigger}
          classNames={classNames}
          galleryElements={galleryElements}
        >
          <div
            className="gallery__item gallery__item--s"
            style={{
              backgroundImage:
                "url(https://www.kennedy-center.org/globalassets/whats-on/genre/ballet/2020-2021/nycb_midsummer_72841.jpg)"
            }}
          ></div>
          <div
            className="gallery__item gallery__item--m"
            style={{
              backgroundImage:
                "url(https://bloximages.chicago2.vip.townnews.com/nonpareilonline.com/content/tncms/assets/v3/editorial/2/ac/2ac2d6a6-4e53-11e8-baec-3f569610ab64/5aea33362582e.image.jpg)"
            }}
          ></div>
          <div
            className="gallery__item gallery__item--l"
            style={{
              backgroundImage:
                "url(https://static01.nyt.com/images/2011/05/19/arts/SUBQUIXOTE1/SUBQUIXOTE1-jumbo.jpg)"
            }}
          ></div>
          <div
            className="gallery__item gallery__item--xl gallery__item--center"
            style={{
              backgroundImage:
                "url(https://www.abt.org/wp-content/uploads/Performances/Ballets/SwanLake/slswans4ro.jpg)"
            }}
          ></div>
          <div
            className="gallery__item gallery__item--l"
            style={{
              backgroundImage:
                "url(https://res.heraldm.com/content/image/2023/03/07/20230307000646_0.jpg)"
            }}
          ></div>
          <div
            className="gallery__item gallery__item--m"
            style={{
              backgroundImage:
                "url(https://dancetabs.com/wp-content/uploads/2021/10/gs-giselle-hee-seo-cory-stearns-lift_1000.jpg)"
            }}
          ></div>
          <div
            className="gallery__item gallery__item--s"
            style={{
              backgroundImage:
                "url(https://miro.medium.com/v2/resize:fit:1400/1*6VYTpm7hq5B3zrZOFk8rvw.jpeg)"
            }}
          ></div>
          <div className="caption">
            Welcome to Ballet Vinyls, where the grandeur of ballet meets the nostalgia of vinyl.<br/>Ready to elevate your musical library?
          </div>
        </Gallery>
    );
    
}

export default GalleryRow;