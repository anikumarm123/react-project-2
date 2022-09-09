
//import Api from './ApiPractice/Api';
import './App.css';
import Content from './Task/webdesign/content';
import Home from './Task/webdesign/home';
import Nav from './Task/webdesign/nav';
import Login from './Task/webdesign/login';
//import { ListItem } from './Task/ListItem';
//import Form from './forms/form';
//import CartItem from './cartItems/CartItem';
//import Header from './header/header';
//  import Home from './routerPractice/Home';

//  import Profile from './routerPractice/Profile';
 //import About from './routerPractice/CartItem';
//  import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import CartItem from './routerPractice/CartItem';

function App() {
  return(
    <div>
       {/* <Api/> */}
       {/* <Header/> */}
       {/* <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="cartItem" element={<CartItem/>}></Route>
       </Routes>
       </BrowserRouter> */}
       
      
       {/* <Form/>   */}
      
      {/* <CartItem/> */}
      {/* <ListItem/> */}
      <Nav/>
      <Home/>
      <Content/>
      <Login/>
      
    </div>
  )
}

export default App;
