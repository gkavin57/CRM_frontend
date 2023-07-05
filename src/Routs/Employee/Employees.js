import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { env } from "../../Components/Config";
import { toast } from "react-toastify";

function Employees() {
  const params = useParams();
  const navigateto = useNavigate();
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
      let data = await axios.post(
        `${env.api}/customers/${params.id}`,
        finalvalue
      );
      LoadeData();
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
    } catch (error) {}
  };
  let logout = () => {
    window.localStorage.clear();
    navigateto("/");
  };
  return (
    <div>
      <div className=" sticky-top bg-light">
        <div className="navbar container">
          <img
            src="https://wishlistmember.com/wp-content/uploads/2021/08/ZOHO CRM.png"
            style={{ width: "50px", borderRadius: "5px" }}
          ></img>
          <div>
            <ul className="navbar nav-list">
              <li className="me-5">{params.id}</li>
              <li className="me-5" onClick={logout}>
                LogOut
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="container text-center mt-5"
        style={{ boxShadow: "2px 2px 20px lightGray", borderRadius: "3PX" }}
      >
        <div className="table-responsive">
          <table className="table table-hover table-section">
            <thead>
              <tr>
                <th>Lead Name</th>
                <th>Lead Email</th>
                <th>Lead Address</th>
                <th>Company Name</th>
                <th>Domain Name</th>
                <th>
                  {" "}
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="RequestStatus"
                    value={value}
                    onChange={handleChange}
                  >
                    <option selected className="text-center">
                      RequestStatus
                    </option>
                    <option value="Created1">Created</option>
                    <option value="Open">Open</option>
                    <option value="In process">In process</option>
                    <option value="Released">Released</option>
                    <option value="Canceled">Canceled</option>
                    <option value="Completed">Completed</option>
                  </select>
                </th>
                <th>Action</th>
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
                    <td>
                      <Link
                        to={`/Employee/${data._id}`}
                        className=" me-2 edit_btn"
                        type="submit"
                        onClick={update}
                      >
                        Update
                      </Link>
                      <Link className=" edit_btn ">Remove</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
