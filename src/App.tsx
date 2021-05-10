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
    </main>
  );
}

export default App;
