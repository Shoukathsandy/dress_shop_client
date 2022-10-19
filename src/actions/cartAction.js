export const addToCart = (dress, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: dress.name,
    _id: dress._id,
    image: dress.image,
    varient: varient,
    quantity: Number(quantity),
    prices: dress.prices,
    price: dress.prices[0][varient] * quantity,
  };
  if (cartItem.quantity > 10) {
    alert("you Can only add 10 dresss");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: dress });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  }
};

export const deleteFromCart = (dress) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: dress });
  const cartItems = getState().cartReducer.cartitems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
