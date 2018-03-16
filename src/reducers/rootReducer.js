const initialState = {
  breedList: [],
  selectedBreed: {
    name: '',
    image: ''
  },
  wishList: []
}

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_BREED':
      return state;
    case 'RECEIVED_BREED':
      return {...initialState, breedList: Object.keys(action.breeds.message)}
    case 'FETCH_BREED_IMAGE':
      return state;
    case 'STORE_BREED_NAME':
      return {...initialState, ...{selectedBreed: {...initialState.selectedBreed, name: action.breed }}}
    case 'RECEIVED_IMAGE':
      return {...initialState, ...{selectedBreed: {...initialState.selectedBreed, image: action.image}}}
    case 'ADD_TO_WISH_LIST':
      return {...initialState, wishList: action.name}
    default:
      return state;
  }
}

export default rootReducer;