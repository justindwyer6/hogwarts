import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <button className="logout" onClick={() => this.props.signOut()}>Log out</button>
        <div className="housesHeader">
          <p>Uh oh, it looks like some ghosts stole the scoreboard.<br/>
          Come back later to see your house points!</p>
        </div>
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
        </div>
      </>
    );
  }
}

export default Home;
