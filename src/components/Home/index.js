import React from "react";

import { withAuthorization } from "../Session";

const HomePage = () => {
  return (
    <div>
      <header>
        <button>Sign Out</button>
      </header>
      <p>The Home Page is accessible by every signed in user.</p>
    </div>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
