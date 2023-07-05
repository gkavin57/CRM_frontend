import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ManageCustomers() {
  const [edited, setedit] = useState([]);
  const navigateto = useNavigate();
  const params = useParams({});
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Address: "",
      Company: "",
      Domain: "",
    },
    onSubmit: async (values) => {
      setedit([...edited, values]);
      console.log(edited);
    },
  });
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
              <li className="me-5">Admin Name</li>
              <li className="me-5" onClick={logout}>
                LogOut
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form
        className="p-5 col-lg-5 col-md-6 col-sm-10 container"
        onSubmit={formik.handleSubmit}
      >
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
        <lable for="Adress">Address</lable>
        <input
          className="form-control mb-2"
          Name="Address"
          onChange={formik.handleChange}
          value={formik.values.Address}
        ></input>
        <lable for="Email">Company</lable>
        <input
          class="form-select"
          aria-label="Default select example"
          Name="Company"
          onChange={formik.handleChange}
          value={formik.values.Company}
        ></input>
        <lable for="Email">Domain</lable>
        <input
          class="form-select"
          aria-label="Default select example"
          Name="Domain"
          onChange={formik.handleChange}
          value={formik.values.Domain}
        ></input>

        <div class="d-grid gap-2 mt-2">
          <button class="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default ManageCustomers;
