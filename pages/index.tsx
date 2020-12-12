import React, { FC, Fragment } from "react";

export const Home: FC = () => {
  return (
    <Fragment>
      <section>
        <div className="container">
          <h1>Welcome headline</h1>
          <p>This is a default subtitle</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
