import { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { CartCont } from "../contexts/CartContext";

function Food({ food, setCartItem, cartItem }) {
  const [isActive, setActive] = useState(false);
  const [counter, setCounter] = useState(1);

  // console.log(cartItem);

  function handleCartItem(type) {
    // console.log(food._id);

    setCartItem((prev) => {
      // return food._id;
      const data = prev;
      if (data[food._id]) {
        if (type === "plus") {
          data[food._id] += 1;
        }
        if (type === "minus") {
          data[food._id] -= 1;
        }
      } else {
        data[food._id] = 1;
      }
      setCounter(data[food._id]);
      return data;
    });
  }

  return (
    <div className="shadow-xl rounded-xl overflow-hidden hover:cursor-pointer">
      <div className="relative">
        <img src={food.image} alt="img" />

        {isActive && counter > 0 ? (
          <div className="bg-white absolute bottom-4 right-4 rounded-full p-2 space-x-2">
            {counter > 1 && (
              <button
                className="btn_minus"
                onClick={() => handleCartItem("minus")}
              >
                <FaMinus />
              </button>
            )}
            <span className="text-lg">{counter}</span>
            <button className="btn_plus" onClick={() => handleCartItem("plus")}>
              <FaPlus />
            </button>
          </div>
        ) : (
          <button
            className="absolute text-orange-500 bottom-4 right-4 bg-white p-3 rounded-full"
            onClick={() => setActive((prev) => !prev)}
          >
            <FaPlus />
          </button>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3>{food.name}</h3>
          <div>
            <img src="/frontend_assets/rating_starts.png" alt="star" />
          </div>
        </div>
        <p>{food.description}</p>
        <span>${food.price}</span>
      </div>
    </div>
  );
}

export default Food;
