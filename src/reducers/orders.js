export default (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_ORDER':
      return Object.assign({}, state, {order: action.order})

    case 'GET_ORDER':
      return Object.assign({}, state, {lastOrder: action.lastOrder});

    default:
      return state;
  };
};