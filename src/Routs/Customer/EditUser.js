import { useFormik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const [edited, setedit] = useState([]);
  const params = useParams({});
  console.log(params);
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Address: "",
      RequestStatus: "",
      CompanyName: "",
      DomaineName: "",
    },
    onSubmit: async (values) => {
      setedit([...edited, values]);
      console.log(edited);
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
            <ul className="navbar nav-list">
              <li className="me-5">Employee Name</li>
              <li className="me-5">LogOut</li>
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
        <lable for="Adress">Adsress</lable>
        <input
          className="form-control mb-2"
          Name="Address"
          onChange={formik.handleChange}
          value={formik.values.Address}
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
        <lable for="Subject">RequestStatus</lable>
        <select
          class="form-select"
          aria-label="Default select example"
          Name="RequestStatus"
          onChange={formik.handleChange}
          value={formik.values.RequestStatus}
        >
          <option selected>Open this select menu</option>
          <option value="Created1">Created</option>
          <option value="Open">Open</option>
          <option value="In process">In process</option>
          <option value="Released">Released</option>
          <option value="Canceled">Canceled</option>
          <option value="Completed">Completed</option>
        </select>
        <div class="d-grid gap-2 mt-2">
          <button class="btn btn-primary" type="submit">
            Udate
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
