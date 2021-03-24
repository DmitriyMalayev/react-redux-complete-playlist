import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
    //id property of the post
    //this triggers deletePost in mapDispatchToProps and it dispatches an action
    //The action is received by the rootReducer
    // this.props.history.push("/")  => redirects user to homepage after deleting
  };
  render() {
    const post = this.props.post ? ( //no more this.state.post because we attached it.
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center"></div>
        <button className="btn grey" onClick={this.handleClick}>
          Delete Post
        </button>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
/*
  mapDispatchToProps Notes
  If we want to interact or make a change to the state from this component we have to be able to dispatch an action from the component. The action will contain a Type and an optional Payload, the payload can be the id of the post we want to delete. The action is dispatched to the reducer, and the reducer takes the action and checks the type of action and takes in the payload (id) we want to delete from the state and it makes the change from the central state. When that changes we get the updated props inside of the component.

  mapDispatchToProps takes in a parameter which is the dispatch method.
   store.dispatch({ type: "ADD_CUISINE", cuisine: "Italian" });  REFERENCE  we don't need to use store. when calling dispatch
  return  => represents what properties or what functions we're going to map to the props of this component.
  deletePost => We want to map a function called deletePost, that will dispatch an action with a type and id, which is passed as an argument in deletePost. Whenever we call the function deletePost we are dispatching { dispatch({type: 'DELETE_POST', id: id}) }
  deletePost is going to be attached to our props, so we can use it inside of our component

  mapStateToProps Notes   
  We want to grab a single individual record. We can use ownProps, it refers to the props of the component before we attach the additional props from the Redux Store.  We use post_id because it's how we reference it when we set up the routes in App.js
  
  LONG VERSION
  const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
      post: state.posts.find((post) => { return post.id === id})
    }

  */
