const initialState = {
  breedList: []
}

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_BREED':
      return state;
    case 'RECEIVED_BREED' :
      return {...initialState, breedList: Object.keys(action.breeds.message)}
      // return Object.assign({}, initialState, {breedList: action.breed})
    default:
      return state;
  }
}

export default rootReducer;