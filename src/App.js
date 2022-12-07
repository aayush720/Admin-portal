import Home from "./pages/home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
    // not a good idea to pass props because of prop driling 
    //so create a context api  context folder create
    // <div className={dark ?"app dark" : "app"} >
  // const [dark,setDark]=useState(false);

  const {darkMode}=useContext(DarkModeContext)
  return (

    // not a good idea to pass props because of prop driling 
    //so create a context api  context folder create
    // <div className={dark ?"app dark" : "app"} >
    <div className={darkMode ?"app dark" : "app"} >
      <BrowserRouter>
        <Routes>
          {/*one thing is write like this always . if need login then /login */}
          {/* <Route path="/" element={<Home />}></Route> */}

          {/* second way is like this  */}
          <Route path="/">
        
            <Route index element={<Home/>} />  
            <Route path="login" element={<Login />} />  {/*work like /login    */}
            <Route path="user">
              <Route index element={<List />} />     {/*work like /user   */}
              <Route path=":userId" element={<Single />} />   {/*work like /user/:userId  */}
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />       {/* work like /user/new */}
            </Route>
            <Route path="product">
              <Route index element={<List />} />     {/*work like /product  */}
              <Route path=":productId" element={<Single />} />   {/*work like /product/:productId  */}
              <Route path="new" element={<New inputs={productInputs} title="Add New Products"/>} />       {/* work like /product/new */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
