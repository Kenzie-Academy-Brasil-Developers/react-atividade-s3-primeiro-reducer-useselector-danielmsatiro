const initialState = ["Banana", "Maçã", "Morango"];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      const { fruit } = action;
      return [...state, fruit];

    default:
      return state;
  }
};

export default fruitsReducer;
