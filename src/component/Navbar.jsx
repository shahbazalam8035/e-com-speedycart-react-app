import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <div className='logo'>SpeedyCart</div>
        <div className="searchBar">
    <input type="search" />
        </div>
        <ul>
            <li><Link to="/" className='link'>Shop</Link></li>
            <li><Link to="/cart" className='link'><ShoppingBasketIcon className='basket'></ ShoppingBasketIcon></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
