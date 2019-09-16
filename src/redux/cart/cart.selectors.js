// Caches cart item quantity for memoization to prevent unnecessary re-rendering
import { createSelector } from 'reselect';

// Get a reference to the cart in the global state object
const selectCart = state => state.cart;

// Get cart items
export const selectCartItems = createSelector(
  [selectCart], // Cart object
  cart => cart.cartItems
);

// Toggle hidden cart
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// Use selectCartItems to reduce the quantities of cart items
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
