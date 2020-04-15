import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <section className="house">
          <p>
            Slytherin
          </p>
          <hr/>
        </section>
        <section className="house">
          <p>
            Hufflepuff
          </p>
          <hr/>
        </section>
        <section className="house">
          <p>
            Ravenclaw
          </p>
          <hr/>
        </section>
        <section className="house">
          <p>
            Gryffindor
          </p>
          <hr/>
        </section>
        <button onClick={() => this.props.signOut()}>Log out!</button>
      </div>
    );
  }
}

export default Home;
