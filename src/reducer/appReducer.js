import addCountField from '../utilities/addCountField';
import filterProducts from '../utilities/filterProducts';

const ACTIONS = {
  TOGGLE_CART: 'toggle_cart',
  FETCH_ERROR: 'fetch_error',
  FETCH_SUCCESS: 'fetch_success',
  INCREMENT_COUNT: 'increment_count',
  DECREMENT_COUNT: 'decrement_count',
}

const reducer = (state, action) => {
  if (action.type === ACTIONS.TOGGLE_CART) {
    return {
      ...state,
      displayCart: !state.displayCart
    }
  } else if (action.type === ACTIONS.FETCH_SUCCESS) {
    const integratedProducts = addCountField(filterProducts(action.payload));
    return {
      ...state,
      loading: false,
      products: integratedProducts,
      error: false,
    }
  } else if (action.type === ACTIONS.FETCH_ERROR) {
    return {
      ...state,
      loading: false,
      products: [],
      error: action.payload.error
    }
  } else if (action.type === ACTIONS.INCREMENT_COUNT) {
    return {
      ...state,
      products: state.products.map(product => product.id === action.payload.id ? {
        ...product,
        count: product.count + 1
      } : product)
    }
  } else if (action.type === ACTIONS.DECREMENT_COUNT) {
    return {
      ...state,
      products: state.products.map(product => product.id === action.payload.id ? {
        ...product,
        count: product.count > 0 ? product.count - 1 : 0
      } : product)
    }
  }
  return state;
}

export {
  ACTIONS,
  reducer
}
