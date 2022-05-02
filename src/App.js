import { Route, Routes } from "react-router-dom";
import AddItem from "./Pages/AddItem/AddItem";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Signup from "./Pages/Login/Signup/Signup";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import ManageItems from "./Pages/ManageItems/ManageItems";
import MyItems from "./Pages/MyItems/MyItems";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>} ></Route>
        <Route path="/my" element={<MyItems></MyItems>}></Route>
        <Route path="/item/:inventoryId" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/manageinventory" element={<ManageInventories></ManageInventories>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
