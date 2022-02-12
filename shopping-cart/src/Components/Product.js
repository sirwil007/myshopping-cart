import React, {useContext} from 'react';
import { AddedProduct } from '../App';

export default function Product(props) {
    const addHandler = useContext(AddedProduct)
    return (
        <div className='Product'>
            <img src={props.currProd.img} alt=""/>
            <h3>{props.currProd.name}</h3>
            <h3>{props.currProd.price}$</h3>
            <button onClick={() => addHandler(props.currProd)}>add to cart</button>
        </div>
    );
}
