const ACTIONS = {
  TOGGLE_CART: 'toggle_cart',
  FETCH_ERROR: 'fetch_error',
  FETCH_SUCCESS: 'fetch_success'
}

const reducer = (state, action) => {
  if (action.type === ACTIONS.TOGGLE_CART) {
    return {
      ...state,
      displayCart: !state.displayCart
    }
  } else if (action.type === ACTIONS.FETCH_SUCCESS) {
    return {
      ...state,
      loading: false,
      products: action.payload,
      error: '',
    }
  } else if (action.type === ACTIONS.FETCH_ERROR) {
    return {
      ...state,
      loading: false,
      products: [],
      error: action.payload.error
    }
  }
  return state;
}

export {
  ACTIONS,
  reducer
}
