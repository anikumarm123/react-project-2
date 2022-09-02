import { useState } from "react";
import "./forms.css";
const Form = () => {
  const [ProductName, setProductName] = useState("Enter Product Name");
  const [ProductPrice, setProductPrice] = useState("Enter Product Price");
  const [availableQty, setQty] = useState("Availability");
  const [productView, setProduct] = useState([]);

  const mainFun = (n) => {
    n.preventDefault();
   setProduct([...productView,{ProductName, ProductPrice,availableQty}])
   console.log(productView);
   //productView.push(ProductName, ProductPrice,availableQty);
    
  };
  console.log(productView);
  // const nameFun = (name) => {
  //   setProductName(name.target.value);
  // };
  // const priceFun = (price) => {
  //   setProductPrice(price.target.value);
  // };
  const holeFun = (event) => {
    console.log(event.target.name);
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
        {/* <form onSubmit={mainFun}> */}
        <label for='pn'>
          Product Name:
          <input
            name="productName"
            value={ProductName}
            onChange={holeFun}
            id='pn'
          ></input>
        </label>

        <label for='pp'>
          Product Price:
          <input
            name="productPrice"
            value={ProductPrice}
            onChange={holeFun}
            id='pp'
          ></input>
        </label>

        <label for='pa'>
          Product Available :
          <input name="productAvailable" value={availableQty} onChange={holeFun} id='pa'></input>
        </label>

        <button onClick={mainFun}>Submit</button>
        {/* <input type={'submit'}></input> */}
        {/* </form> */}
      </div>
      <div className="add"></div>
    </div>
  );
};

export default Form;
