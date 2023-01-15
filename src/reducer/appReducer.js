const ACTIONS = {
  TOGGLE_CART: 'toggle_cart',
  RESET: 'reset',
}

const reducer = (state, action) => {
  if (action.type === ACTIONS.TOGGLE_CART) {
    return {
      ...state,
      displayCart: !state.displayCart
    }
  }
  return state;
};

export {
  ACTIONS,
  reducer
}
