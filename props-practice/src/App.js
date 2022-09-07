
//import Api from './ApiPractice/Api';
import './App.css';
//import Form from './forms/form';
//import CartItem from './cartItems/CartItem';
//import Header from './header/header';
 import Home from './routerPractice/Home';

 import Profile from './routerPractice/Profile';
 import About from './routerPractice/About';
 import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return(
    <div>
       {/* <Api/> */}
       {/* <Header/> */}
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="about" element={<About/>}></Route>
       </Routes>
       </BrowserRouter>
       
      
       {/* <Form/>   */}
      
      {/* <CartItem/> */}
    </div>
  )
}

export default App;
