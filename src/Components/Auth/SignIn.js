import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { env } from "../Config";
import { Authschema } from "./Schemas";

function SignIn() {
  let toastId = null;

  const navigateto = useNavigate();
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },
    validationSchema: Authschema,
    onSubmit: async (values) => {
      try {
        let data = await axios.post(`${env.api}/signin`, values);
        if (data) {
          toast(data.data.message, {
            className: "tost-massage",
          });
          navigateto("/Login");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log(formik.errors);
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
          className=" col-lg-3 container auth "
          onSubmit={formik.handleSubmit}
        >
          <div className="text-center mt-5 ">
            <img
              src="https://repathsolutions.com/wp-content/uploads/2020/09/zoho-crm.png"
              style={{ width: "50px", borderRadius: "5px" }}
            ></img>
            <h4>ZOHO CRM</h4>
          </div>
          <input
            name="FirstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.FirstName}
            className={
              formik.errors.FirstName && formik.touched
                ? "input_error form-control mt-5"
                : "form-control mt-5"
            }
          ></input>
          <br />
          {formik.errors.FirstName && formik.touched && (
            <p className="error">
              <i class="bi bi-shield-fill-exclamation me-1 p-1"></i>
              {formik.errors.FirstName}
            </p>
          )}
          <input
            name="LastName"
            placeholder="Last Name"
            className={
              formik.errors.LastName && formik.touched
                ? "input_error form-control mt-5"
                : "form-control mt-5"
            }
            onChange={formik.handleChange}
            value={formik.values.LastName}
          ></input>
          <br />
          {formik.errors.LastName && formik.touched && (
            <p className="error">
              <i class="bi bi-shield-fill-exclamation me-1 p-1"></i>
              {formik.errors.LastName}
            </p>
          )}
          <input
            name="Email"
            placeholder="Email"
            className={
              formik.errors.Email && formik.touched
                ? "input_error form-control mt-5"
                : "form-control mt-5"
            }
            onChange={formik.handleChange}
            value={formik.values.Email}
          ></input>
          <br />
          {formik.errors.Email && formik.touched && (
            <p className="error">
              <i class="bi bi-shield-fill-exclamation me-1 p-1"></i>
              {formik.errors.Email}
            </p>
          )}
          <input
            name="Password"
            placeholder="Password"
            className={
              formik.errors.Password && formik.touched
                ? "input_error form-control mt-5"
                : "form-control mt-5"
            }
            onChange={formik.handleChange}
            value={formik.values.Password}
          ></input>
          <br />
          {formik.errors.Password && formik.touched && (
            <p className="error">
              <i class="bi bi-shield-fill-exclamation me-1 p-1"></i>
              {formik.errors.Password}
            </p>
          )}
          <input
            name="ConfirmPassword"
            placeholder="ConfirmPassword"
            type="password"
            className={
              formik.errors.ConfirmPassword && formik.touched
                ? "input_error form-control mt-5"
                : "form-control mt-5"
            }
            onChange={formik.handleChange}
            value={formik.values.ConfirmPassword}
          ></input>
          <br />
          {formik.errors.ConfirmPassword && formik.touched && (
            <p className="error">
              <i class="bi bi-shield-fill-exclamation me-1 p-1"></i>
              {formik.errors.ConfirmPassword}
            </p>
          )}
          <div class="d-grid gap-2 mt-5 text-center">
            <button class="edit_btn" type="submit">
              SignUp
            </button>
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

export default SignIn;
