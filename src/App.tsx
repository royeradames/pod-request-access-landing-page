import React from "react";
import { useForm } from "react-hook-form";
import "./styles/main.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// images
import logo from "./assets/desktop/logo.svg";
import applePodcast from "./assets/desktop/apple-podcast.svg";
import googlePodcast from "./assets/desktop/google-podcasts.svg";
import pocketCast from "./assets/desktop/pocket-casts.svg";
import spotify from "./assets/desktop/spotify.svg";

// input types

// schema
const schema = yup.object().shape({
  email: yup.string().email().required(),
});

// app
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Pod logo" className="logo" />
      </header>
      <main className="main">
        <h1 className="title">
          <span className="title--lime-green">Publish your podcasts</span>
          everywhere.
        </h1>
        <p className="body">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
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
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form__email"
            {...register("email")}
            placeholder="Email Address"
          />
          <p className="form--error">
            {errors.email?.message ? "Oops! Please check your email" : ""}
          </p>
          <button className="form__request">Request Access</button>
        </form>
      </main>
    </div>
  );
}

export default App;
