import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Routs/Users";
import Employees from "./Routs/Employee/Employees";
import Admin from "./Routs/Admin";
import Home from "./Components/Home";
import EditUser from "./Routs/Customer/EditUser";
import ViewEmployess from "./Routs/Employee/ViewEmployees";
import ViewCustomers from "./Routs/Customer/ViewCustomers";
import ManageCustomers from "./Routs/Customer/ManageCustomer";
import SignIn from "./Components/Auth/SignIn";
import Login from "./Components/Auth/Login";
import Forgot from "./Components/Auth/Forgot";
import Reset from "./Components/Auth/Reset";
import AddEmployee from "./Routs/Employee/AddEmployee";
import { ToastContainer } from "react-toastify";
import UserRequest from "./Routs/UserRequest";
import ManageAdmin from "./Routs/ManageAdmin";
import Products from "./Components/Products";
import AddProducts from "./Components/AddProducts";
import ProtectedRoutes from "./Components/Auth/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Forgot" element={<Forgot />}></Route>
        <Route path="/:token/:id" element={<Reset />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/User/:name" element={<Users />}></Route>
          <Route path="/User" element={<Users />}></Route>
          <Route
            path="/edituser/:name/:email/:address"
            element={<EditUser />}
          ></Route>
          <Route path="/Userrequest" element={<UserRequest />}></Route>
          <Route path="/AddEmployess" element={<AddEmployee />}></Route>
          <Route path="/Employee/:id" element={<Employees />}></Route>
          <Route path="/Employee/" element={<Employees />}></Route>
          <Route path="/Employee/:name" element={<Employees />}></Route>
          <Route path="/ViewEmployess" element={<ViewEmployess />}></Route>
          <Route path="/ViewCustomers" element={<ViewCustomers />}></Route>
          <Route
            path="/ManageCustomers/:name/:email/:address/:company/:domain"
            element={<ManageCustomers />}
          ></Route>
          <Route path="/Admin/:name" element={<Admin />}></Route>
          <Route path="/manageadmin" element={<ManageAdmin />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/AddProducts" element={<AddProducts />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
