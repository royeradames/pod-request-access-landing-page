import React from "react";

import logo from "./assets/desktop/logo.svg";
import applePodcast from "./assets/desktop/apple-podcast.svg";
import bgDots from "./assets/desktop/bg-pattern-dots.svg";
import googlePodcast from "./assets/desktop/google-podcasts.svg";
import imageHost from "./assets/desktop/image-host.jpg";
import pocketCast from "./assets/desktop/pocket-casts.svg";
import spotify from "./assets/desktop/spotify.svg";

function App() {
  return (
    <main className="main">
      <img src={logo} alt="Pod logo" className="logo" />
      <h1 className="title">
        <span className="title--lime-green">Publish your podcasts</span>
        everywhere.
      </h1>
      <p className="body">
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <div className="podcast">
        <img
          src={spotify}
          alt="spotify podcast logo"
          className="podcast__spotify"
        />
        <img
          src={applePodcast}
          alt="apple podcast logo"
          className="podcast__apple"
        />
        <img
          src={googlePodcast}
          alt="Google podcast logo"
          className="podcast__google"
        />
        <img
          src={pocketCast}
          alt="pocket casts logo"
          className="podcast__pocket-casts"
        />
      </div>
    </main>
  );
}

export default App;
