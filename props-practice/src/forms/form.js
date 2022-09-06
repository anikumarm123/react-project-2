import { useState } from "react";
import "./forms.css";
import ShowItem from "./ShowItem";
const Form = () => {
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState('');
  const [availableQty, setQty] = useState('');
  const [productView, setProduct] = useState([]);

  const mainFun = (n) => {
    n.preventDefault();
    
    setProduct([...productView, { ProductName, ProductPrice, availableQty }]);
    setProductName("")
    setProductPrice("")
    setQty("")
     
  };
  
  const removeItem =(remove)=>{
    const reject =  productView.filter((a)=>{
          return remove !== a 
      })
    setProduct([...reject])    
  }
  
  const editItem = (e)=>{
    console.log(e);
      //const edit = 
      setProductName(e.ProductName)
      setProductPrice(e.ProductPrice)
      setQty(e.availableQty)
          
  }
  const allFun = (event) => {
  
    if (event.target.name === "productName") {
      setProductName(event.target.value);
    }
    if (event.target.name === "productPrice") {
      setProductPrice(event.target.value);
    }
    if (event.target.name === "productAvailable") {
      setQty(event.target.value);
    }
  };
  return (
    <div className="forms">
      <div className="inp">
        
        <label>Product Name:</label>
          <input name="productName" value={ProductName} onChange={allFun} ></input>
        
        <label>Product Price:</label>
          <input name="productPrice" value={ProductPrice} onChange={allFun} ></input>
        
        <label> Product Available :</label>
          <input name="productAvailable" value={availableQty} onChange={allFun} ></input>
        
        <button onClick={mainFun}>Submit</button>
      </div>
      <div className="show">
      {productView.map((a,int)=>
        <ShowItem item = {a}  key={int} removeBtn ={removeItem} edit={editItem}/>

      )}
      </div>
    </div>
  );
};

export default Form;
