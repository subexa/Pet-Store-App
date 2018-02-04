const API = 'https://dog.ceo/api'

export const fetchBreed = animal => {
  return {
    type: 'FETCH_BREED',
    animal
  }
}

export const fetchAnimalBreed = animal => {
  return function (dispatch) {
    dispatch(fetchBreed(animal));
    return fetch(`${API}/breeds/list/all`)
    .then(response => response.json())
    .then(json => dispatch(receivedBreed(json)))
  }
}

export const receivedBreed = (breeds) => {
  // console.log(Object.keys(breeds.message).map(breed => {console.log(breeds.message[breed])}));
  return {
    type: 'RECEIVED_BREED',
    breeds
  }
}