const initialState = {
  location: {
    content: null,
  },

  weather: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LAD_LON":
      return {
        ...state,
        location: {
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
