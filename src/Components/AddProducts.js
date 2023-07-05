import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { env } from "./Config";

function AddProducts() {
  const navigateto = useNavigate();
  const formik = useFormik({
    initialValues: {
      Name: "",
      Uses: "",
      Subject: "",
      description: "",
      Imgurl: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${env.api}/products`, values);
        navigateto("/Products");
        toast("products Added", {
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
          <div></div>
        </div>
      </div>
      <form className="p-5 col-lg-3 container" onSubmit={formik.handleSubmit}>
        <lable for="Name">Name</lable>
        <input
          className="form-control mb-2"
          Name="Name"
          onChange={formik.handleChange}
          value={formik.values.Name}
        ></input>
        <lable for="Uses">Uses</lable>
        <input
          className="form-control mb-2"
          Name="Uses"
          onChange={formik.handleChange}
          value={formik.values.Uses}
        ></input>
        <lable for="Subject">Subject</lable>
        <input
          className="form-control mb-2"
          Name="Subject"
          onChange={formik.handleChange}
          value={formik.values.Subject}
        ></input>
        <lable for="description">description</lable>
        <input
          className="form-control mb-2"
          Name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        ></input>
        <lable for="description">Imgurl</lable>
        <input
          className="form-control mb-2"
          Name="Imgurl"
          onChange={formik.handleChange}
          value={formik.values.Imgurl}
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

export default AddProducts;
