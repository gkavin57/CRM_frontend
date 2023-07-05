import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { env } from "../../Components/Config";

function AddEmployee() {
  const navigateto = useNavigate();
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Address: "",
      Position: "",
      Type: "Employee",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${env.api}/employee`, values);
        navigateto("/ViewEmployess");
        toast("Employee Added", {
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
    <div>
      <div className=" sticky-top bg-light">
        <div className="navbar container">
          <img
            src="https://wishlistmember.com/wp-content/uploads/2021/08/ZOHO CRM.png"
            style={{ width: "50px", borderRadius: "5px" }}
          ></img>
          <div>
            <ul className="navbar nav-list"></ul>
          </div>
        </div>
      </div>
      <form className="p-5 col-lg-3 container" onSubmit={formik.handleSubmit}>
        <lable for="FirstName">FirstName</lable>
        <input
          className="form-control mb-2"
          Name="FirstName"
          onChange={formik.handleChange}
          value={formik.values.FirstName}
        ></input>
        <lable for="FirstName">LastName</lable>
        <input
          className="form-control mb-2"
          Name="LastName"
          onChange={formik.handleChange}
          value={formik.values.LastName}
        ></input>
        <lable for="Email">Email</lable>
        <input
          className="form-control mb-2"
          Name="Email"
          onChange={formik.handleChange}
          value={formik.values.Email}
        ></input>
        <lable for="Password">Password</lable>
        <input
          className="form-control mb-2"
          Name="Password"
          onChange={formik.handleChange}
          value={formik.values.Password}
        ></input>
        <lable for="Adress">Address</lable>
        <input
          className="form-control mb-2"
          Name="Address"
          onChange={formik.handleChange}
          value={formik.values.Address}
        ></input>
        <lable for="Adress">Type</lable>
        <input
          className="form-control mb-2"
          Name="Type"
          disabled
          onChange={formik.handleChange}
          value={formik.values.Type}
        ></input>
        <lable for="Position">Position</lable>
        <select
          class="form-select mb-2"
          aria-label="Default select example"
          Name="Position"
          onChange={formik.handleChange}
          value={formik.values.Position}
        >
          <option selected>Open this select menu</option>
          <option value="Testing">Testing</option>
          <option value="FrontEnd">FrontEnd</option>
          <option value="UI/UX Desginer">UI/UX Desginer</option>
          <option value="Node.js developer">Node.js developer</option>
          <option value="Devops">Devops</option>
          <option value="React developer">React developer</option>
        </select>
        <div class="d-grid gap-2 mt-2">
          <button class="edit_btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
