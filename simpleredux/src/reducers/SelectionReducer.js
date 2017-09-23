//Reducers are always called with a state object (the most recent one)
export default (state = null, action) => {
  console.log(action.payload)
  switch (action.type){
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
