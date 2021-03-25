export const deletePost = (id) => {
  return {
    type: "DELETE_POST",
    id: id,
  };
};

//Action Creator => We're creating a function that is returning a function
