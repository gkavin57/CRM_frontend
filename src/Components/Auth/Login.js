import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { env } from "../Config";

function Login() {
  // const [datas, setdata] = useState([])
  const Navigateto = useNavigate();
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: async (values) => {
      try {
        let data = await axios.post(`${env.api}/login`, values);
        let getdata = await axios.get(`${env.api}/auth/${values.Email}`);
        if (!data.status === 200) {
          toast.error("User Not Available", {
            className: "tost-massage",
          });
        } else {
          window.localStorage.setItem("app_token", data.data.createdToken);
          console.log(getdata.data[0].Type);
          switch (getdata.data[0].Type) {
            case "User":
              Navigateto(`/User/${getdata.data[0].FirstName}`);
              toast(`${`Welcome ${getdata.data[0].FirstName}`}`, {
                className: "tost-massage",
              });
              break;
            case "Employee":
              Navigateto(`/Employee/${getdata.data[0].FirstName}`);
              toast(`${`Welcome ${getdata.data[0].FirstName}`}`, {
                className: "tost-massage",
              });
              break;
            case "Admin":
              Navigateto(`/Admin/${getdata.data[0].FirstName}`);
              toast(`${`Welcome ${getdata.data[0].FirstName}`}`, {
                className: "tost-massage",
              });
              break;
          }
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message, {
          className: "tost-massage",
        });
      }
    },
  });
  return (
    <div>
      <div className="bg-light sticky-top">
        <div className=" sticky-top bg-light">
          <div className="navbar container">
            <img
              src="https://repathsolutions.com/wp-content/uploads/2020/09/zoho-crm.png"
              style={{ width: "50px", borderRadius: "5px" }}
            ></img>
            <div>
              <ul className="navbar nav-list">
                <li className="me-5">
                  <Link className="li-link-auth" to={"/Login"}>
                    Login
                  </Link>
                </li>
                <li className="me-5">
                  <Link className="li-link-auth " to={"/SignIn"}>
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content-div-auth">
        <div className=" content text container">
          <div className="col-12">
            <h1 className="pt-3 text" style={{ fontSize: "70px" }}>
              The real customer centric CRM
            </h1>
            <h4 className="pt-2 text" style={{ fontSize: "50px" }}>
              Track leads, close opportunities and get accurate forecasts.
            </h4>
            <div>
              <button className="mt-3 content-btn">
                Start Now - It's Free
              </button>
              <p style={{ fontSize: "20px" }} className="mt-3 text">
                Free,forever,with unlimited users.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <form
          className="col-lg-3 container auth "
          onSubmit={formik.handleSubmit}
        >
          <div className="text-center mb-5">
            <img
              src="https://repathsolutions.com/wp-content/uploads/2020/09/zoho-crm.png"
              style={{ width: "50px", borderRadius: "5px" }}
            ></img>
            <h4>ZOHO CRM</h4>
          </div>
          <input
            name="Email"
            placeholder="Email"
            className="form-control mb-5"
            onChange={formik.handleChange}
            value={formik.values.Email}
          ></input>{" "}
          <br />
          <input
            name="Password"
            type="password"
            placeholder="Password"
            className="form-control mb-5"
            onChange={formik.handleChange}
            value={formik.values.Password}
          ></input>
          <div class="d-grid gap-2 mt-2 text-center">
            <button class="edit_btn" type="submit">
              Login
            </button>
            <br />

            <Link to={"/Forgot"}>Forgot Password ?</Link>
            <br />

            <Link to={"/"} class="edit_btn" type="submit">
              Close
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
