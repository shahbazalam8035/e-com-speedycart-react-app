import React, { createContext, useState } from "react";
import { PRODUCTS } from "../product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index <= PRODUCTS.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(cartItems);

  const getTotalCartAmount=()=>{
    let totalAmount = 0;
    for(let item in cartItems){
      // console.log(item);
      if (cartItems[item]>0) {
        let itemInfo = PRODUCTS.find((product)=>product.id===Number(item))
        console.log(itemInfo.price);
        // console.log(parseInt(itemInfo.price));
        console.log(cartItems[item]);
        totalAmount +=cartItems[item] * itemInfo.price;
        console.log(totalAmount);
      }
    }
    return totalAmount;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount =(newAmount,itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:newAmount}))
  }
  
const contextValue ={cartItems,addToCart,removeToCart,updateCartItemCount,getTotalCartAmount}

console.log(cartItems);
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
