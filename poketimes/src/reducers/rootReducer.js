const initState = {
  posts: [
    { id: "1", title: "Apple", color: "Red" },
    { id: "2", title: "Fruit", color: "Varies" },
    { id: "3", title: "Vegetable", color: "Varies" },
  ],
};
const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return { ...state, posts: newPosts };
  }
  return state;
};
export default rootReducer;
/*
rootReducer
The first time state runs it doesn't have a value. This is why we make a default set to initState.  
filter => is non destructive. If it's the same it's kept if not it's removed. We assign it to newPosts. */
