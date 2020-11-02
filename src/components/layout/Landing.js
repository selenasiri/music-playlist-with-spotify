import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/video.mp4'

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Opera & Pop Playlists</h1>
          
          <video autoplay loop muted>
            <source src="video.mp4" type="video/mp4"></source>
          </video>
          <p className="lead">
            Select a genre
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
