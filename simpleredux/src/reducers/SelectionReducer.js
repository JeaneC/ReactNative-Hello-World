//Reducers are always called with a state object (the most recent one)
export default (state = null, action) => {
  switch (action.type){
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
