import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const Product = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {addToCart,cartItems}= useContext(ShopContext);
    const cartItemAmount=cartItems[id];
  return (
    <div className='product'>
    <img src={productImage} alt="" />
    <h2>{productName}</h2>
    <p>₹{price}.00</p>
    {/* <button onClick={()=> props.addToCart(id)}>Add to Cart</button> */}
    <button className='addToCartBtn' onClick={()=>addToCart(id)}>Add to Cart{cartItemAmount>0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product
