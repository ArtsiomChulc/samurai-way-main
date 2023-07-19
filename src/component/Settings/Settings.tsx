import React from "react";
import { withAuthRedirect } from "../../HOC/withAuthredirect";
import { compose } from "redux";

const Settings = () => {
  return (
    <div>
      <h1>TEST</h1>
      <button
        onClick={() => {
          console.log("test");
        }}
      >
        test
      </button>
    </div>
  );
};

export default compose<React.ComponentType>(withAuthRedirect)(Settings);

// export default withAuthRedirect(Settings);
