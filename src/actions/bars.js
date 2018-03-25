import fetch from 'cross-fetch';

const env = 'http://localhost:8080';


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
