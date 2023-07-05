import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { env } from "../Config";

function Reset() {
  const params = useParams();
  const navigateto = useNavigate();
  const formik = useFormik({
    initialValues: {
      Password: "",
      ConfirmPassword: "",
    },
    onSubmit: async (values) => {
      console.log(params);
      try {
        await axios.put(`${env.api}/${params.token}/${params.id}`, values);
        toast(" password Reset Successfully", {
          className: "tost-massage",
        });
        navigateto("/login");
      } catch (error) {
        toast("Reset Time expired", {
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
              src="https://wishlistmember.com/wp-content/uploads/2021/08/ZOHO CRM.png"
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
                    SignIn
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
              src="https://wishlistmember.com/wp-content/uploads/2021/08/ZOHO CRM.png"
              style={{ width: "50px", borderRadius: "5px" }}
            ></img>
            <h4>ZOHO CRM</h4>
          </div>
          <input
            name="Password"
            placeholder="NewPassword"
            className="form-control mb-5"
            onChange={formik.handleChange}
            value={formik.values.Password}
          ></input>
          <input
            name="ConfirmPassword"
            placeholder="ConfirmPassword"
            className="form-control mb-5"
            onChange={formik.handleChange}
            value={formik.values.ConfirmPassword}
          ></input>
          <div class="d-grid gap-2 mt-2 text-center">
            <button class="edit_btn" type="submit">
              Reset
            </button>
            <Link to={"/Login"}>Login</Link>
            <Link to={"/"} class="edit_btn" type="submit">
              Close
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reset;
