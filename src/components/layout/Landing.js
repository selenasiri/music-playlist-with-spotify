import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../assets/video.mp4'

const Landing = () => {
  return (
    <div>
      <header>
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src={Video} type="video/mp4" />
        </video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3">Start Listening Now</h1>
              <p class="lead mb-0">with our personalized playlists</p>
            </div>
          </div>
        </div>
      </header>

      <section class="my-5">
        <div class="container">
          <div class="row">
            {/* <div class="col-md-8 mx-auto">
              <p>The HTML5 video element uses an mp4 video as a source. Change the source video to add in your own background! The header text is vertically centered using flex utilities that are build into Bootstrap 4.</p>
              <p>The overlay color can be changed by changing the <code>background-color</code> of the <code>.overlay</code> class in the CSS.</p>
              <p>Set the mobile fallback image in the CSS by changing the background image of the header element within the media query at the bottom of the CSS snippet.</p>
              <p class="mb-0">
                Created by <a href="https://startbootstrap.com">Start Bootstrap</a>
              </p>
            </div> */}

            <div className="genre">
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
        </div>
      </section>
    </div>

  );
};

export default Landing;
