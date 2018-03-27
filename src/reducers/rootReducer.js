const initialState = {
  breedList: [],
  selectedBreed: {
    name: '',
    image: ''
  },
  wishList: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BREED':
      return state;
    case 'RECEIVED_BREED':
      return { ...state, breedList: Object.keys(action.breeds.message) };
    case 'FETCH_BREED_IMAGE':
      return state;
    case 'STORE_BREED_NAME':
      return {
        ...state,
        ...{
          selectedBreed: { ...state.selectedBreed, name: action.breed }
        }
      };
    case 'RECEIVED_IMAGE':
      return {
        ...state,
        ...{
          selectedBreed: { ...state.selectedBreed, image: action.image }
        }
      };
    case 'ADD_TO_WISH_LIST':
      return {
        ...state,
        wishList: [...state.wishList, action.name]
      };
    default:
      return state;
  }
};

export default rootReducer;
