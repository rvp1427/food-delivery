import { createContext, useState } from "react";

export const CartCont = createContext();

// let test = 0;

function CartContext({ children }) {
  const [cartItem, setCartItem] = useState(0);

  function handleCartItem(type, food) {
    console.log(food._id);

    // setCartItem(food._id);
    // setCartItem((prev) => {
    //   return food._id;
    // if (data[food._id]) {
    //   if (type === "plus") {
    //     data[food._id] += 1;
    //   }
    //   if (type === "minus") {
    //     data[food._id] -= 1;
    //   }
    // } else {
    //   data[food._id] = 1;
    // }
    // setCounter(data[food._id]);
    // return data;
    // });
  }

  return (
    <CartCont.Provider value={{ cartItem, handleCartItem, setCartItem }}>
      {children}
    </CartCont.Provider>
  );
}

export default CartContext;
