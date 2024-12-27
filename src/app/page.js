'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css'; // Create this CSS file for styling
import Testimonial from './components/Testimonial/Testimonial';
import About from './components/about/about';
import Image from 'next/image';
import HexagonSections from './components/triangle/triangle';
import TrainingSection from './components/training/training';
import './page.css'
import bgImage from '../../public/sec-bg.png'
import Footer from './components/footer/footer';
import BookForm from './components/get-book/book';
import FeaturedIn from './components/featured-in/featured-in';
import AutoplayCarousel from "./components/ImageGrid/ImageGrid";
export default function Home() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 500); // Delay animation
  }, []);

  return (
<div className="dd_container">
      <section className={styles.banner}>
        <div className={styles.bannerOverlay}>7
          <div className="content">

          <video autoPlay={true} width={'100%'} height={'100%'} src="http://darikalexander.com/wp-content/uploads/2017/06/website-loop-darik-1.m4v" loop="loop"  muted={true} id="mejs_376381418949159_html5"  >
        
          </video>
          </div>
          
          <div className="contact">
            <div style={{textAlign: 'left'}}>
              <h1 >It's Time to Make the Transition</h1>
              <p style={{position: 'relative'}}>Your path to success starts here— join my mailing list <img style={{width: '12.5px', height: '15px', top: '7px', position: 'absolute', marginLeft: '10px', transform: 'scale(-1, 1)'}} src="/hand-pointing-down.png" /></p>
              <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '1rem', width: '700px',marginTop: '20px'}}>
                <input type="email" placeholder="Enter your email" required />
                <input type="text" placeholder="Enter your first name" required />
              </div>
            </div>
          </div>
          </div>
          {/* <iframe className={styles.video} width="960" height="815" src="https://www.youtube.com/embed/9Vd4VZYE43M?si=ZxJnDWMzmNHIFqlO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

          {/* <video
            autoPlay
            muted
            loop
            playsInline
            
            >
            </video> */}
          </section>
          <div className={styles.topPageTestimonial}>
            
            <FeaturedIn></FeaturedIn>
            
            <Testimonial></Testimonial>
            <section className={styles.animatedSection}>
            <div
              className={`${styles.textContainer} ${
                animateText ? styles.slideIn : ''
              }`}
              >
              <h2 className='site-text'>Join the Journey to Greatness</h2>
              <button className={styles.getInTouchBtn}>
                <a target="_blank" href="https://www.messenger.com/t/1977363389210514/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0">
                  <p className='site-text' style={{padding: '20px'}}>Get in touch</p>
                </a>
              </button>
            </div>
      </section>
            <AutoplayCarousel></AutoplayCarousel>
          </div>
          
          <About></About>
          <div className='hexagon-container'>
            
          <h2 className="elementor-heading-title elementor-size-default">
                Join the Movement to  <span className="stoneharbour-text-sec6">
                Become The Person</span><br></br>

         You Know You Were<span className="bold-gotham"> MADE TO BE</span>
         </h2>
          <HexagonSections></HexagonSections>
          <div className="hexagon-gradient"></div>
          <div className="hexagon-gradient-white"></div>
          </div>
          <div style={{position: 'relative',marginTop: '100px'}}>

          <TrainingSection></TrainingSection>

          <BookForm showImage={false}></BookForm>
          <section className={styles.animatedSection} style={{marginTop: '100px'}}>
            <div
              className={`${styles.textContainer} ${
                animateText ? styles.slideIn : ''
              }`}
              style={{marginBottom: '2rem'}}
              >
              <h2 className='site-text'>Join the Journey to Greatness</h2>
              <button className={styles.getInTouchBtn} >
                <a target="_blank" href="https://www.messenger.com/t/1977363389210514/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0">
                  <p className='site-text' style={{padding: '20px'}}>Get in touch</p>
                </a>
              </button>
            </div>
          </section>
        </div>
      
      </div>
  );
}
