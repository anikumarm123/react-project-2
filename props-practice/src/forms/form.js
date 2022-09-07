import { useState } from "react";
import "./forms.css";
import ShowItem from "./ShowItem";
const Form = () => {
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState('');
  const [availableQty, setQty] = useState('');
  const [productView, setProduct] = useState([]);
  const [duplicatAry,setAry] = useState([]);
  const [check,setCheck]=useState(false)
  const mainFun = (n) => {
    n.preventDefault();

    setProduct([...productView, { ProductName, ProductPrice, availableQty,id:productView.length+1}]);
    console.log(productView);
    
    setProductName("")
    setProductPrice("")
    setQty("")    
}
  const removeItem =(remove)=>{
    const reject =  productView.filter((a)=>{
          return remove !== a 
      })
    setProduct([...reject])    
  }
  
  const update =()=>{
      setCheck(false) 
    const d = duplicatAry
    const isExit=productView.some((data)=>
               data.id === d.id
    )
    if(isExit){
     const replace = productView.map((data)=>{
        if(data.id === d.id){
          return {...data,ProductName:ProductName,ProductPrice:ProductPrice,availableQty:availableQty}
        
        } 
        else{
          return{...data}
        } 
    })
    setProduct(replace)
    setProductName("")
    setProductPrice("")
    setQty("")  
  };
  }
  const editItem = (e)=>{
    setCheck(true)
     setAry(e) 
    
     console.log(duplicatAry);
        setProductName(e.ProductName);
        setProductPrice(e.ProductPrice);
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
        
        {!check?<button onClick={mainFun}>Submit</button>:<button onClick={update}>Update</button>}
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
