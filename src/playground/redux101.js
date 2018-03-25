import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
  console.log('running')

  switch (action.type) {
    case 'INCREMENT':
      return { count: ++state.count }
    case 'DECREMENT':
      return { count: --state.count }

    case 'RESET':
      return { count: 0 }

    default:
      return state
  }
});


store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
console.log(store.getState());
store.dispatch({type: 'RESET'})


console.log(store.getState());