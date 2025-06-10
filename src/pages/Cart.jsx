import React, { useContext } from "react";
import "./cart.css";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
    return total + itemPrice * item.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Item Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={i}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <div className="qty-control">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="qty-btn"
                      >
                        −
                      </button>
                      <span className="qty-display">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td>
                    ₹
                    {(
                      Number(item.price.replace(/[^\d.]/g, "")) * item.quantity
                    ).toFixed(2)}
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>
                      <MdDelete className="icon icon-del" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-price">
            <span>Total Price:</span>
            <span className="price"> ₹ {totalPrice.toFixed(2)}</span>
          </div>
          <div className="buy-butn">
            <button onClick={() => navigate("/successful")}>
              Proceed to Buy
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
