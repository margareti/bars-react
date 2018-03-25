export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_BARS':
      console.log('get bars event', action)
      return [
        ...state,
        action.bars
      ];

    default:
      return state;
  };
};