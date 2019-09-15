export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Look for duplicate item
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // Return new array with updated quantity if duplicate item found
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // Add item to cart with initial quantity
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
