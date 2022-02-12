import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

export default function Cart(props) {
  return (
    <div  className='cart-items'>
        <div id = "cart-head" className="item">
          <h4>Image</h4>
          <h5>Name</h5>
          <div>
            <h5>Quantity</h5>
          </div>
          <h5>Price Per Item</h5>
        </div>
        {
            props.items.map(el => <Item key = {el.id} currItem = {el}/>)
        }
        <div id = "cart-tail" className="item">
          <h5> Total Price : <strong>{props.price} $ </strong></h5>
          <span><Link to = "/Checkout">Checkout</Link></span>
        </div>
    </div>
  );
}
