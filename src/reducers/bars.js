export default (state = {}, action) => {
  switch (action.type) {

    case 'GET_BARS':
      return Object.assign({}, state, {data: action.bars})

    case 'GET_BAR':
      return Object.assign({}, state, {currentBar: action.bar})

    case 'SAVE_ORDER':
      return Object.assign({}, state, {order: action.order})

    case 'GET_ORDER':
      return state;

    default:
      return state;
  };
};