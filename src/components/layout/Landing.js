import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../assets/video.mp4'

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Start Listening Now</h1>
          
          {/* { false ? (<img src='' />) : ( */}
           <video className="video" autoplay loop muted >
            <source src={Video} type="video/mp4" />
           Your browser does not support the video tag.
          </video>
          {/* )} */}
         
          <p className="lead">
            Choose a genre 
          </p>
          <div className="buttons">
            <Link to="/opera" className="btn btn-primary">
              Opera
            </Link>
            <Link to="/artist" className="btn btn-primary">
              Pop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
