import React,{useState} from "react";

function Chotu({ value }) {
 const[addquantity,setaddquantity]=useState(value)
 const[totalAmount,settotalAmount]=useState(0)

 const[cart,setcart]=useState(0)

/* const removeItem=(i)=>{
  let newproductlist=[...addquantity]
  let newtotalAmount=totalAmount;
  newtotalAmount -= newproductlist[i].Quantity * newproductlist[i].Price;
  newproductlist.splice(i,1)
  setaddquantity(newproductlist)
  settotalAmount(newtotalAmount)
console.log(newproductlist)
} */

/* y its not working???

const removal=(i)=>{
  let newproductlist=[...addquantity]
  newproductlist.map((val,i)=>(
    val[i]=[]
  ))
  setaddquantity(newproductlist)
  console.log(newproductlist)
} */

 const reset=()=>{
  let newproductlist=[...addquantity]
   newproductlist.map((numberQuantity)=>{
    return numberQuantity.Quantity=0
   })
   setcart(0)
   setaddquantity(newproductlist)
   settotalAmount(0)
  
 } 
   

/* This code is to update quantity and price of each element individually...

const reset=(i)=>{
  let newproductlist=[...addquantity]
  newproductlist[i].Quantity=0;
  setaddquantity(newproductlist)
 let newtotalAmount=totalAmount
newtotalAmount=newproductlist[i].Quantity*newproductlist[i].Price
settotalAmount(newtotalAmount)
} */



 const add=(i)=>{
 let newproductlist=[...addquantity]  
 let newtotalAmount=totalAmount
 let count=cart
 newproductlist[i].Quantity++ 
 setaddquantity(newproductlist)
 count=newproductlist[0].Quantity+newproductlist[1].Quantity+newproductlist[2].Quantity
 
      

 setcart(count)
 newtotalAmount+=newproductlist[i].Price
 settotalAmount(newtotalAmount) 

console.log(count)
 }
  

 const remove=(i)=>{
  let count=cart
  let newproductlist=[...addquantity]
  let newtotalAmount=totalAmount
     if(newproductlist[i].Quantity>0) {
      newproductlist[i].Quantity--
      newtotalAmount-=newproductlist[i].Price
      
      count=newproductlist[0].Quantity+newproductlist[1].Quantity+newproductlist[2].Quantity
      
     }     
     setcart(count)
     settotalAmount(newtotalAmount)
     setaddquantity(newproductlist)                          
  }


  return (
    <div>
       {
        value.map((val,i)=>{
          return <>
          
          <div >
            <ul key={i}>
           <li className="clr">{val.item}</li>
           <li className="clr">{val.Price}</li>
           <li className="clr">{val.Quantity}</li>
            </ul>
          

          {/* incre-decri */}
          
          <button type="button" className="btn btn-danger me-2 ms-3" onClick={()=>{remove(i)}}>
            Remove   
            </button>
            <button type="button" className="btn btn-warning me-2">
              {val.Quantity}
            </button>
            <button type="button" className="btn btn-primary me-2"  onClick={()=>{add(i)}}>
              Add
            </button>
          
            <button type="button" className="btn btn-secondary total mt-5">{val.Quantity*val.Price}</button>
           {/*  <button type="button" className="btn btn-light total mt-5" onClick={()=>{reset(i)}}>Reset</button>  */}

           {/* removal starts here... */}
           {/*  <button type="button" className="btn btn-secondary total mt-5" onClick={()=>{removal(i)}}>Delete</button> */}

           
          </div>
          
            
          </>
        })
       }


           <div>
           <button type="button" className="btn btn-primary total mt-5"id="bt1" >Total Amount:{totalAmount}</button>
           <button type="button" className="btn btn-light total mt-5"id="bt2"  onClick={()=>{reset()}}>Reset</button>
           <button type="button" className="btn btn-light total mt-5"id="bt3" >CartItems:{cart}</button>
            </div> 

            
            
      
     
    </div>
  );
}

export default Chotu;
