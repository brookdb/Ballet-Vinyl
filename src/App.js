//libraries
import React from "react";
import Lenis from '@studio-freight/lenis'

//components
import GalleryRow from "./components/Gallery/GalleryRow";
import GalleryStack from "./components/Gallery/GalleryStack";
import TitleHero from "./components/TitleHero";
import withTextAnimation from "./components/HOC/withTextAnimation";
import Footer from "./components/Footer";
import Ticker from "./components/Ticker";


//data
import gallery from "./Data/gallery";
import imageList from "./Data/imageList";

//style
import "./styles.css";

// HOC for animating any text
const AnimatedH1 = withTextAnimation(({ children, className }) => <h1 className={className}>{children}</h1>);


const App = () => {
  //Lenis Scrolling
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    //console.log(e)
  })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  let timeline = {
    xPercent: 100,
  }
  //rendering
  return (
    <div className="App">
        <TitleHero/>
        <GalleryRow/>
        <div className="spacer"></div>
        <AnimatedH1 className="collection-text">Explore our carefully curated selection of classical ballet music, remastered to perfection for vinyl.<br/>Immerse yourself in the elegance of ballet, one vinyl at a time.</AnimatedH1>
        <div className="spacer"></div>
        <GalleryStack items={gallery[0].items} caption={gallery[0].caption} />
        <div className="spacer"></div>
        
        <GalleryStack items={gallery[1].items} caption={gallery[1].caption} />
        <div className="spacer"></div>
        <GalleryStack items={gallery[2].items} caption={gallery[2].caption} />
        <div className="spacer"></div>
        <GalleryStack items={gallery[3].items} caption={gallery[3].caption} />
        <div className="spacer"></div>
        <AnimatedH1 className="collection-text">Start your ballet vinyl collection today and bring home the opulence and drama of the world's greatest ballets.</AnimatedH1>
        <Ticker v={50} timeline={timeline}  className={"image-ticker"}>
          {
            imageList.map((image, i) => (
              <li className="img-wrapper">
                <img key={i} src={image}/>
              </li>
            ))
          }
        </Ticker >
        <Footer/>
      </div>
  );
};

export default App;
