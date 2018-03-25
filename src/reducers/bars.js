export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_BARS':
      console.log('in action', action.bars)
      return action.bars;

    default:
      return state;
  };
};