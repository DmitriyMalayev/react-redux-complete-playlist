import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";
//connect is a function that we can invoke to bring back a higher order component.
//We also use connect because we want to connect our Home component to the Redux store.

class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);

//connect is a function that returns a higher order component that is then wrapping the Home Component.  We need to be able to retrieve data from the store. 
//If a Component wants access to the store, we take some data from the store and we map that data to the props of our component.
//When we connect to redux, it knows what data it wants to grab from redux(state.posts) and the property we want to create from our props object(posts) to apply that data to.
