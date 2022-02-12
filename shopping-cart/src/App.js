import './App.css';
import Products from './Components/Products';
import Cart from "./Components/Cart"
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import { createContext, useState } from 'react';
import ThankYou from './Components/ThankYou';



export const AddedProduct = createContext();
export const RemovedProduct = createContext();

function App() {

  const [cartItems, setCartItems] = useState([])

  const [cartCount, setCount] = useState(0)

  const [cartPrice, setCartPrice] = useState(0)

  const handleAdd = (prod) => {
    setCount(cartCount + 1);
    setCartPrice(cartPrice + prod.price)

    let currCart = cartItems

    let index = cartItems.findIndex(item => item.pId === prod.pId);

    if(index === -1){
      prod.quantity = 1
      setCartItems([...cartItems, prod])
    }else{
      prod = currCart[index]
      prod.quantity = prod.quantity + 1;

      currCart[index] = prod

      setCartItems(currCart)
    }
  }

  const handleRemove = (prod) =>{

    setCount(cartCount - 1);
    setCartPrice(cartPrice-prod.price)

    let currCart = cartItems

    let index = cartItems.findIndex(item => item.pId === prod.pId);


    prod = currCart[index]
    prod.quantity = prod.quantity - 1;


    if(prod.quantity == 0){
      currCart.splice(index, 1)
    }else{
      currCart[index] = prod
    }

    setCartItems(currCart)

  }
  
  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <h1><Link className='link' to="/">ShopIt</Link></h1>
          <nav>
            <Link to = "/Cart" className="link" id = "cart">Cart<span>{cartCount}</span></Link>
          </nav>
        </header>

        <AddedProduct.Provider value = {handleAdd} >
        <RemovedProduct.Provider value = {handleRemove}>
          <Routes>
    
            <Route path='/' element = {<Products/>}/>
      
            <Route path='/Cart' element = {<Cart price = {cartPrice} items = {cartItems}/>}/>

            <Route path='/Checkout' element = {<ThankYou/>}></Route>
          </Routes>

        </RemovedProduct.Provider>
        </AddedProduct.Provider>
        
    
      </div>
    </Router>
    
  );
}

export default App;
