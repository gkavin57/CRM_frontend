import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { env } from "../Components/Config";
import { toast } from "react-toastify";

function UserRequest() {
  const navigateto = useNavigate();
  const [request, setrequest] = useState([]);
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Address: "",
      Subject: "",
      CompanyName: "",
      DomaineName: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${env.api}/customers`, values);
        navigateto("/User");
        toast("Request Sended", {
          className: "tost-massage",
        });
      } catch (error) {
        console.log(error);
        toast("Somthing wrong", {
          className: "tost-massage",
        });
      }
    },
  });
  return (
    <div className="user_div">
      <div className=" sticky-top bg-light">
        <div className="navbar container">
          <img
            src="https://wishlistmember.com/wp-content/uploads/2021/08/ZOHO CRM.png"
            style={{ width: "50px", borderRadius: "5px" }}
          ></img>
          <h5 style={{ color: "#7742e6" }}>ZOHO CRM</h5>
          <div>
            <ul className="navbar nav-list">
              <li className="me-5">{params.name}</li>
              <li className="me-5">Log Out</li>
              <li className="me-5">
                Responses<div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="container col-lg-3 requst-div"
        style={{ boxShadow: "2px 2px 20px lightGrey", borderRadius: "3px" }}
      >
        <h2 className="text-center pt-5">Send Message</h2>
        <div className="text-center">
          <img
            src="https://us.123rf.com/450wm/fedrunovan/fedrunovan2002/fedrunovan200200672/142172281-the-user-press-a-button-with-a-finger-.jpg?ver=6"
            style={{ width: "100px" }}
          ></img>
        </div>
        <form className="p-5" onSubmit={formik.handleSubmit}>
          <lable for="Name">Name</lable>
          <input
            className="form-control mb-2"
            Name="Name"
            onChange={formik.handleChange}
            value={formik.values.Name}
          ></input>
          <lable for="Email">Email</lable>
          <input
            className="form-control mb-2"
            Name="Email"
            onChange={formik.handleChange}
            value={formik.values.Email}
          ></input>
          <lable for="Email">CompanyName</lable>
          <input
            className="form-control mb-2"
            Name="CompanyName"
            onChange={formik.handleChange}
            value={formik.values.CompanyName}
          ></input>
          <lable for="Email">DomaineName</lable>
          <input
            className="form-control mb-2"
            Name="DomaineName"
            onChange={formik.handleChange}
            value={formik.values.DomaineName}
          ></input>
          <lable for="Address">Address</lable>
          <textarea
            className="form-control mb-2"
            Name="Address"
            onChange={formik.handleChange}
            value={formik.values.Address}
          ></textarea>
          <lable for="Subject">Subject</lable>
          <textarea
            className="form-control"
            Name="Subject"
            onChange={formik.handleChange}
            value={formik.values.Subject}
          ></textarea>
          <div class="d-grid gap-2 mt-2">
            <Link to={"/User"} class="edit_btn" type="submit">
              Send
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRequest;
