import fetch from 'cross-fetch';

const env = 'http://localhost:8080'//'http://default-environment.dihumbvgjw.us-east-2.elasticbeanstalk.com/';


export const getBars = (json) => {
  return {
    type: 'GET_BARS',
    bars: json
  }
}

export const startGetBars = () => {

  return function (dispatch) {
    return fetch(`${env}/bars`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(getBars(json))
      )
  }
}

export const getBar = (json) => {
  return {
    type: 'GET_BAR',
    bar: json
  }
}

export const startGetBar = (id) => {

  return function (dispatch) {
    return fetch(`${env}/currentBarPrices/${id}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(getBar(json))
      )
  }
}

export const saveOrder = (json) => {
  return {
    type: 'SAVE_ORDER',
    order: json
  }
}

export const startSaveOrder = (obj) => {
  console.log('start save order', obj)
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
        (response) => {
          console.log('after place round ', response)
          return response.json()
        },
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
