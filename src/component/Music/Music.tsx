import React from "react";
import s from "./music.module.css";
import { withAuthRedirect } from "../../HOC/withAuthredirect";
import { compose } from "redux";

const Music = () => {
  return <div className={s.music}>Music</div>;
};

export default compose(withAuthRedirect)(Music);

// export default withAuthRedirect(Music)
