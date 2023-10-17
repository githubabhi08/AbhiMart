
import React from 'react'
import './App.css';
import Chotu from "./Chotu"
/* import Cart from './Cart'; */
function App() {


const product=[
  {
    item:"Realme Narzo",
    Price:19000,
    Quantity:0
  },
  {
    item:"Redme 10 Pro",
    Price:107000,
    Quantity:0
  },
  {
    item:"Vivo 10 Pro",
    Price:17000,
    Quantity:0  
  }
]



  return (
    <>
    <h1 id="high">AbhiCart</h1>
 < Chotu value={product}   />
        
{/* <Cart /> */}
        
    
    
    
    
    
    
    
    </>
  )
}

export default App


