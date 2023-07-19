import React from "react";
import s from "../preloader/preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.lds_roller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Preloader;
