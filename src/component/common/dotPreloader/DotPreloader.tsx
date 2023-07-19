import React from "react";
import s from "./dotPreloader.module.css";

const DotPreloader = () => {
  return (
    <span>
      <p className={s.saving}>
        {/*wait*/}
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </span>
  );
};

export default DotPreloader;
