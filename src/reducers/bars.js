export default (state = {}, action) => {
  switch (action.type) {

    case 'GET_BARS':
      return Object.assign({}, state, {data: action.bars})

    case 'GET_BAR': 
      console.log('get bar', action.bar);
      return Object.assign({}, state, {currentBar: action.bar})

    default:
      return state;
  };
};