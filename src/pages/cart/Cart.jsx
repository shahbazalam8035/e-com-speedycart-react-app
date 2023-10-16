import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  let totalAmount = getTotalCartAmount();
  // console.log(totalAmount);
  return (
    <div className="cart">
      <h1>Your Cart Items</h1>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product}  />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>
            <b>Subtotal: ₹{totalAmount}</b>
          </p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h2 style={{textAlign: "center",margin:"30px 0px 0px 0px "}}>Your cart is empty!</h2>
      )}
    </div>
  );
};

export default Cart;
