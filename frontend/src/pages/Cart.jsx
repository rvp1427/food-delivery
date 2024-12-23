import { IoMdClose } from "react-icons/io";
import { food_list } from "../../public/frontend_assets/assets";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function Cart({ cartItem, handleOpen }) {
  const [total, setTotal] = useState(0);
  const [cartList, setCartList] = useState([]);

  const { token } = useLocalStorage();

  function handleCheckOut() {
    if (!token) {
      handleOpen();
    }
  }

  useEffect(() => {
    let res = Object?.entries(cartItem).map((item) => {
      const search = item[0];
      const data = food_list.find((food) => food._id === search);
      data["quantity"] = item[1];
      // console.log(data);
      return data;
    });

    setCartList(res);
  }, [cartItem]);

  useEffect(() => {
    setTotal(
      cartList.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
    );

    // console.log(data);
  }, [total, cartList]);

  function handleRemove(id) {
    setCartList((prev) => {
      const data = prev.filter((item) => item._id !== id);
      return data;
    });
  }

  return (
    <div className="con flex justify-between items-start gap-5">
      <table className="table-fixed w-1/2 border-2 flex-grow text-center">
        <thead>
          <tr>
            <th>Items</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartList.length > 0 &&
            cartList.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="w-28">
                    <img src={item.image} alt="food1" />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.quantity * item.price}</td>
                <td>
                  <button onClick={() => handleRemove(item._id)}>
                    <IoMdClose />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="w-1/3 px-6">
        <h3 className="font-bold">Cart Totals</h3>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <span>${total}</span>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <span>$5</span>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <span>${total + 5}</span>
        </div>
        <button className="btn btn_primary" onClick={handleCheckOut}>
          proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
