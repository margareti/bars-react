import fetch from 'cross-fetch';

const env = 'http://localhost:8080';

export const saveOrder = (json) => {
  return {
    type: 'SAVE_ORDER',
    order: json
  }
}

export const startSaveOrder = (obj) => {
  return function (dispatch) {
    return fetch(`${env}/placeRound`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(saveOrder(json))
      )
  }
}

export const getLastOrder = (json) => {
  return {
    type: 'GET_ORDER',
    lastOrder: json
  }
}

// As there is no requirements for users accounts,
// the /lastOrder endpoint returns the "latest" order.
// For a user-specific "order" interface an alternative solution would be 
// to save the orders in localStorage. 

export const startGetLastOrder = () => {

  return function (dispatch) {
    return fetch(`${env}/lastOrder/`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(getLastOrder(json))
      )
  }
}
