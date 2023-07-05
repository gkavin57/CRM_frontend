import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { env } from "../Components/Config";

export default function Users() {
  const navigateto = useNavigate();
  const [datas, setdata] = useState([]);
  const [isloading, setLoading] = useState(false);
  const params = useParams();
  let logout = () => {
    window.localStorage.clear();
    navigateto("/");
  };
  let Request = () => {
    navigateto("/Userrequest");
  };
  useEffect(() => {
    Loaddate();
  }, []);
  let Loaddate = async () => {
    setLoading(true);
    let data = await axios.get(`${env.api}/products`);
    setdata(data.data);
    setLoading(false);
  };
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
              <li className="me-5" onClick={logout}>
                Log Out
              </li>
              <li className="me-5" onClick={Request}>
                Send Requests
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-div">
        <div
          className="text-center mt-5 p-1 user_cards"
          style={{
            width: "300px",
            height: "50px",
            boxShadow: "2px 2px 20px lightGray",
            borderRadius: "3px",
          }}
        >
          <div>New</div>
          <div class="progress">
            <div
              class="progress-bar "
              role="progressbar"
              style={{ width: "56%", backgroundColor: "#7742e6" }}
              aria-valuemin="56"
              aria-valuemax="100"
            >
              56
            </div>
          </div>
        </div>
        <div
          className="text-center p-1  mt-5 user_cards"
          style={{
            width: "300px",
            height: "50px",
            boxShadow: "2px 2px 20px lightGray",
            borderRadius: "3px",
          }}
        >
          <div>Lost</div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "10%", backgroundColor: "#7742e6" }}
              aria-valuemin="6"
              aria-valuemax="100"
            >
              6
            </div>
          </div>
        </div>
        <div
          className="text-center p-1 mt-5 user_cards"
          style={{
            width: "300px",
            height: "50px",
            boxShadow: "2px 2px 20px lightGray",
            borderRadius: "3px",
          }}
        >
          <div>Contacted</div>
          <div class="progress">
            <div
              class="progress-bar "
              role="progressbar"
              style={{ width: "75%", backgroundColor: "#7742e6" }}
              aria-valuemin="75"
              aria-valuemax="100"
            >
              75
            </div>
          </div>
        </div>
        <div
          className="text-center p-1 mt-5 user_cards"
          style={{
            width: "300px",
            height: "50px",
            boxShadow: "2px 2px 20px lightGray",
            borderRadius: "3px",
          }}
        >
          <div>Canceled</div>
          <div class="progress">
            <div
              class="progress-bar "
              role="progressbar"
              style={{ width: "6%", backgroundColor: "#7742e6" }}
              aria-valuemin="6"
              aria-valuemax="100"
            >
              3
            </div>
          </div>
        </div>
        <div
          className="text-center p-1 mt-5 user_cards"
          style={{
            width: "300px",
            height: "50px",
            boxShadow: "2px 2px 20px lightGray",
            borderRadius: "3px",
          }}
        >
          <div>Qualified</div>
          <div class="progress">
            <div
              class="progress-bar "
              role="progressbar"
              style={{ width: "67%", backgroundColor: "#7742e6" }}
              aria-valuemin="67"
              aria-valuemax="100"
            >
              67
            </div>
          </div>
        </div>
        <div
          className="text-center p-1 mt-5 user_cards"
          style={{
            width: "300px",
            height: "50px",
            boxShadow: "2px 2px 20px lightGray",
            borderRadius: "3px",
          }}
        >
          <div>Completed</div>
          <div class="progress ">
            <div
              class="progress-bar "
              role="progressbar"
              style={{ width: "67%", backgroundColor: "#7742e6" }}
              aria-valuemin="67"
              aria-valuemax="100"
            >
              67
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div style={{ height: "150px" }}></div>
      <div>
        <div
          className="container text-center mt-5 table-responsive"
          style={{ boxShadow: "2px 2px 20px lightGray", borderRadius: "3PX" }}
        >
          {isloading ? (
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            datas.map((data, key) => {
              return (
                <div className="card-div text-center ">
                  <div className="product-card col-lg-6">
                    <img src={data.Imgurl} className="pr-img"></img>
                    <h2 className="pr-h2">{data.Name}</h2>
                    <h5 className="pr-h2">{data.Uses}</h5>
                    <h5 className="pr-h2">{data.Subject}</h5>
                    <h5 className="pr-h2">{data.description}</h5>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
