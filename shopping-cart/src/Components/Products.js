import {useState} from 'react';
import Iphone from "../images/iphone13.jpg";
import Product from './Product';

const productsArr = [
    {
        pId : 1,
        name : "Iphone 13",
        desc : "It is apples latest Iphone",
        img : Iphone,
        price: 699
    },
    {
        pId : 2,
        name : "s21",
        desc : "It is apples latest Iphone",
        img : Iphone,
        price: 599
    },
    {
        pId : 3,
        name : "s22",
        desc : "It is apples latest Iphone",
        img : Iphone,
        price: 899
    },
    {
        pId : 4,
        name : "iphone SE",
        desc : "It is apples latest Iphone",
        img : Iphone,
        price: 299
    }

]


export default function Products() {
    const [products, setProducts] = useState(productsArr);


    return (
        <div className='Products'>
            {
                products.map(prod => <Product key = {prod.id} currProd = {prod}/>)
            }
        </div>
    );
}
