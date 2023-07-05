import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { env } from "../Components/Config";
import AdminNav from "../Components/AdminNav";
function ManageAdmin() {
  const navigateto = useNavigate();
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Address: "",
      Type: "Admin",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${env.api}/employee`, values);
        navigateto("/ViewEmployess");
        toast("Admin Added", {
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
      <AdminNav></AdminNav>
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
        <div class="d-grid gap-2 mt-2">
          <button class="edit_btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default ManageAdmin;
