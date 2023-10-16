import React from "react";
import { ShopContext } from '../../context/shop-context';
import { useContext } from "react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {cartItems,addToCart,removeToCart,updateCartItemCount} = useContext(ShopContext)
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div>
      <h2>{productName}</h2>
      <p>${price}.00</p>
      <div className="countHandler">
        <button className="btn" onClick={()=>removeToCart(id)}>-</button><input type="text" onChange={(e)=>updateCartItemCount(Number(e.target.value),id)} value={cartItems[id]} /><button className="btn" onClick={()=>addToCart(id)}>+</button>
      </div>
    </div>
   
      </div>
  );
};

