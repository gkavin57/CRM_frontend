import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminNav from "../Components/AdminNav";
import { env } from "../Components/Config";

function Admin() {
  const [img, setimg] = useState([]);
  useEffect(() => {
    loaddata();
  }, []);
  let loaddata = async () => {
    let data = await axios.get(`${env.api}/imgs`);
    setimg(data.data);
    console.log(img);
  };
  return (
    <div>
      <div className="side-div text-center">
        <div>
          <img
            src="https://wishlistmember.com/wp-content/uploads/2021/08/ZOHO CRM.png"
            className="admin-logo"
          ></img>
          <h5 className="text text-light">ZOHO CRM</h5>
        </div>
        <div className="side_list_div">
          <h5>
            <i class="bi bi-people p-2"></i>
            <Link className="li-link text-light" to={"/ViewEmployess"}>
              Employees
            </Link>
          </h5>
          <h5>
            <i class="bi bi-person-check p-2"></i>
            <Link className="li-link text-light" to={"/ViewCustomers"}>
              Customers
            </Link>
          </h5>
          <h5>
            <i class="bi bi-browser-edge p-2"></i>
            <Link className="li-link text-light" to={"/Products"}>
              Products
            </Link>
          </h5>
        </div>
      </div>
      <AdminNav></AdminNav>
      <div className="card-div" style={{ marginLeft: "12%" }}>
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

      <div style={{ marginLeft: "12%", marginTop: "5%" }}>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://cdnsite.agilecrm.com/img/dashboard-new/xcontactsdetials.png.pagespeed.ic.S8pDcwul9T.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.creatio.com/sites/default/files/pages/crm/crm/4-crm-sales@1x.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.creatio.com/sites/default/files/pages/main/3-service.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
