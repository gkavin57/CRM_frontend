import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { env } from "../../Components/Config";

function ViewCustomers() {
  const params = useParams();
  const navigateto = useNavigate();
  const [isloading, setloading] = useState(false);
  const getInitialState = () => {
    const value = "Created";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  let finalvalue = {
    Status: value,
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  let update = async () => {
    try {
      isloading(true);
      let data = await axios.post(
        `${env.api}/customers/${params.id}`,
        finalvalue
      );
      LoadeData();
      isloading(false);
      toast("Employee Added", {
        className: "tost-massage",
      });
    } catch (error) {
      console.log(error);
      toast("Somthing wrong", {
        className: "tost-massage",
      });
    }
  };

  const [datas, setdata] = useState([]);
  useEffect(() => {
    LoadeData();
  }, []);
  let LoadeData = async () => {
    try {
      let data = await axios.get(`${env.api}/customers`);
      setdata(data.data);
      console.log(datas);
    } catch (error) {}
  };
  let logout = () => {
    window.localStorage.removeItem();
  };
  return (
    <div>
      <div className="side-div text-center">
        <div>
          <img
            src="https://wishlistmember.com/wp-content/uploads/2021/08/ZOHO CRM.png"
            className="admin-logo"
          ></img>
          <h5 className="text text-light">ZOHO CRM</h5>
        </div>
        <div className="side_list_div">
          <h5>
            <i class="bi bi-people p-2"></i>
            <Link className="li-link text-light" to={"/ViewEmployess"}>
              Employees
            </Link>
          </h5>
          <h5>
            <i class="bi bi-person-check p-2"></i>
            <Link className="li-link text-light" to={"/ViewCustomers"}>
              Customers
            </Link>
          </h5>
          <h5>
            <i class="bi bi-browser-edge p-2"></i>
            <Link className="li-link text-light" to={"/Products"}>
              Products
            </Link>
          </h5>
        </div>
      </div>
      <div className=" sticky-top bg-light">
        <div className="navbar container">
          <img
            src="https://wishlistmember.com/wp-content/uploads/2021/08/ZOHO CRM.png"
            style={{ width: "50px", borderRadius: "5px" }}
          ></img>
          <div>
            <ul className="navbar nav-list">
              <li className="me-5" onClick={logout}>
                LogOut
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-div" style={{ marginLeft: "12%" }}>
        <div
          className="container text-center mt-5"
          style={{ boxShadow: "2px 2px 20px lightGray", borderRadius: "3PX" }}
        >
          {isloading ? (
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover table-section ">
                <thead>
                  <tr>
                    <th>Lead Name</th>
                    <th>Lead Email</th>
                    <th>Lead Address</th>
                    <th>Company Name</th>
                    <th>Domain Name</th>
                    <th>RequestStatus</th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((data) => {
                    return (
                      <tr>
                        <td>{data.Name}</td>
                        <td>{data.Email}</td>
                        <td>{data.Address}</td>
                        <td>{data.CompanyName}</td>
                        <td>{data.DomainName}</td>
                        <td>{data.Status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewCustomers;
