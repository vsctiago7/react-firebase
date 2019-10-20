import React from "react";
import { FirebaseContext } from "../Firebase";

const Landing = () => {
  return (
    <div>
      <FirebaseContext.Consumer>
        {firebase => {
          return <div>I've access to Firebase and render something.</div>;
        }}
      </FirebaseContext.Consumer>
    </div>
  );
};

export default Landing;
