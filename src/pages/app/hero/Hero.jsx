import React from "react";
import style from "./Hero.module.css";
import logo from "../../../logos/c.png";

function Hero() {
  return (
    <header>
      <section className={style.logo_wrapper}>
        <img className={style.logo} src={logo} alt="logo" />
      </section>
      <section className={style.content}>
        <h4>Are you ready to ?</h4>
        <h1>Be a part of Coder Zones</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
    </header>
  );
}

export default Hero;
