export default (state = {}, action) => {
  switch (action.type) {

    case 'GET_BARS':
      return Object.assign({}, state, {data: action.bars})

    case 'GET_BAR':
      return Object.assign({}, state, {currentBar: action.bar})

    default:
      return state;
  };
};