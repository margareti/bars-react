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
    bar: json
  }
}

export const startSaveOrder = (obj) => {
  return function (dispatch) {
    return fetch(`${env}/placeRound`, {
      method: 'POST'
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(getBar(json))
      )
  }
}

export const getOrder = () => {
  return {
    type: 'GET_ORDER'
  }
}

