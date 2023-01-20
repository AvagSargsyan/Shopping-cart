import addNewFields from '../utilities/addNewFields';
import filterProducts from '../utilities/filterProducts';

const ACTIONS = {
  TOGGLE_CART: 'toggle_cart',
  FETCH_ERROR: 'fetch_error',
  FETCH_SUCCESS: 'fetch_success',
  INCREMENT_COUNT: 'increment_count',
  DECREMENT_COUNT: 'decrement_count',
  RESET_COUNT: 'reset_count',
  EMPTY_CART: 'empty_cart',
  ADD_COUNT: 'add_count'
}

const reducer = (state, action) => {
  if (action.type === ACTIONS.TOGGLE_CART) {
    return {
      ...state,
      displayCart: !state.displayCart
    }
  } else if (action.type === ACTIONS.FETCH_SUCCESS) {
    const integratedProducts = addNewFields(filterProducts(action.payload), {
      count: 0,
      totalPrice: 0
    });
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
        count: product.count + 1,
        totalPrice: Number.parseFloat((product.price * (product.count + 1)).toFixed(2))
      } : product),
    }
  } else if (action.type === ACTIONS.DECREMENT_COUNT) {
    return {
      ...state,
      products: state.products.map(product => product.id === action.payload.id ? {
        ...product,
        count: product.count > 0 ? product.count - 1 : 0,
        totalPrice: product.count > 0 ? Number.parseFloat((product.price * (product.count - 1)).toFixed(2)) : 0,
      } : product)
    }
  } else if (action.type === ACTIONS.RESET_COUNT) {
    return {
      ...state,
      products: state.products.map(product => product.id === action.payload.id ? {
        ...product,
        count: action.payload.newCount,
        totalPrice: Number.parseFloat((product.price * (action.payload.newCount)).toFixed(2))
      } : product)
    }
  } else if (action.type === ACTIONS.ADD_COUNT) {
    return {
      ...state,
      products: state.products.map(product => product.id === action.payload.id ? {
        ...product,
        count: product.count + action.payload.newCount,
        totalPrice: Number.parseFloat((product.price * (product.count + action.payload.newCount)).toFixed(2))
      } : product)
    }
  } else if (action.type === ACTIONS.EMPTY_CART) {
    return {
      ...state,
      products: state.products.map(product => {
        return {
          ...product,
          count: 0
        }
      })
    }
  }
  return state;
}

export {
  ACTIONS,
  reducer
}
