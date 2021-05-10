import React from "react";
import { useForm } from "react-hook-form";
import "./styles/main.scss";
import * as yup from "yup";
// images
import logo from "./assets/desktop/logo.svg";
import applePodcast from "./assets/desktop/apple-podcast.svg";
import bgDots from "./assets/desktop/bg-pattern-dots.svg";
import googlePodcast from "./assets/desktop/google-podcasts.svg";
import imageHost from "./assets/desktop/image-host.jpg";
import pocketCast from "./assets/desktop/pocket-casts.svg";
import spotify from "./assets/desktop/spotify.svg";

// input types

// schema
const schema = yup.object().shape({
  email: yup.string().email(),
});
// app
function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form"
          {...(register("email"), { required: true })}
          placeholder="Email Address"
        />
        <p className="form--error">{/* {errors.email?.message} */}</p>
        <input type="submit" value="Request Access" className="btn" />
      </form>
    </main>
  );
}

export default App;
