import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { env } from "../../Components/Config";
import { toast } from "react-toastify";

function ViewEmployess() {
  const navigateto = useNavigate();
  const [data, setdata] = useState([]);
  const [isloading, setLoading] = useState(false);
  useEffect(() => {
    LoadeData();
  }, []);
  let LoadeData = async () => {
    let employee = await axios.get(`${env.api}/employee`);
    setdata(employee.data);
  };
  console.log(data);

  let deletedata = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${env.api}/employee/${id}`);
      LoadeData();
      setLoading(false);
      toast("Employee Removed", {
        className: "tost-massage",
      });
    } catch (error) {
      toast("Employee not Removed", {
        className: "tost-massage",
      });
    }
  };
  let logout = () => {
    window.localStorage.clear();
    navigateto("/");
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
      <div className=" sticky-top bg-light text">
        <div className="navbar container">
          <img
            src="https://wishlistmember.com/wp-content/uploads/2021/08/ZOHO CRM.png"
            style={{ width: "50px", borderRadius: "5px" }}
          ></img>
          <h5 style={{ color: "#623fe1" }}>ZOHO CRM</h5>
          <div>
            <ul className="navbar nav-list">
              <li className="me-5" onClick={logout}>
                Log Out
              </li>
              <Link to={"/AddEmployess"} className="edit_btn">
                Add Employees
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-div" style={{ marginLeft: "12%" }}>
        <div
          className="container text-center mt-5 table-responsive"
          style={{ boxShadow: "2px 2px 20px lightGray", borderRadius: "3PX" }}
        >
          {isloading ? (
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <table className="table table-hover table-section">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Position</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data) => {
                  return (
                    <tr>
                      <td>{data.FirstName}</td>
                      <td>{data.Email}</td>
                      <td>{data.Address}</td>
                      <td>{data.Position}</td>
                      <td>
                        <Link
                          className=" edit_btn"
                          onClick={() => deletedata(data._id)}
                        >
                          Remove
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewEmployess;
