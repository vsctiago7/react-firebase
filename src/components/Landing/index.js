import React from "react";
import { FirebaseContext } from "../Firebase";

const Landing = () => {
  return (
    <div>
      <header>
        <button>Login</button>
        <button>Register</button>
      </header>
      <div>
        <FirebaseContext.Consumer>
          {firebase => {
            return <div>I've access to Firebase and render something.</div>;
          }}
        </FirebaseContext.Consumer>
      </div>
    </div>
  );
};

export default Landing;
