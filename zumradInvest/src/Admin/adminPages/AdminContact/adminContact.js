import React from "react";
import Sidebar from "../../../components/Sidebar/sidebar";
import tel from "../../../assets/images/phone-solid-84.png";
import time from "../../../assets/images/time-five-solid-84.png";
import location from "../../../assets/images/location-plus-solid-84.png";
import "./adminContactStyle.css";

function AdminContact() {
  return (
    <>
      <Sidebar />
      <div className="report">
        <h1>Contact</h1>
        <div className="report-container">
          <div className="report-box">
            <div className="report-icon-box">
              <img src={location} />
            </div>
            <div className="report-input-box">
              <input type="text" placeholder="Адрес Зумрат инвест" />
            </div>
            <div className="report-input-box">
              <input
                type="text"
                placeholder="г. Ташкент, Яшнабадский район, ул. 1я. Мавлона Риёзий, д. 31."
              />
            </div>
            <div className="report-input-box">
              <input type="text" placeholder="" />
            </div>
            <div className="report-input-box">
              <input type="text" placeholder="Ориентиры: Wunderkind" />
            </div>
          </div>
          <div className="report-box">
            <div className="report-icon-box">
              <img className="report-icon" src={tel} />
            </div>
            <div className="report-input-box">
              <input type="text" placeholder="Телефон" />
            </div>
            <div className="report-input-box">
              <input type="text" placeholder="перед выездом за час позвоните" />
            </div>
            <div className="report-input-box">
              <input type="text" placeholder="+998 (97) 402-55-48 Сергей" />
            </div>
            <div className="report-input-box">
              <input type="text" placeholder="+998 (97) 402-55-48 Сергей" />
            </div>
          </div>
          <div className="report-box">
            <div className="report-icon-box">
              <img src={time} />
            </div>
            <div className="report-input-box">
              <input type="text" placeholder="Рабочие дни" />
            </div>
            <div className="report-input-box">
              <input type="text" placeholder="Пн. - Сб." />
            </div>
            <div className="report-input-box">
              <input
                type="text"
                placeholder="с 09:00 - 18:00 обед с 13:00 - 14:00"
              />
            </div>
            <div className="report-input-box">
              <input type="text" placeholder="Вс. - ВЫХОДНОЙ" />
            </div>
          </div>
        </div>
      </div>
        <div className="contacts__map">
          <div
            style={{
              display: "flex",
              width: "92%",
              marginLeft: "4%",
              marginRight: "4%",
              marginTop: "30px",
              marginBottom: "100px",
              height: "400px",
              overflow: "hidden",
            }}
          >
            <a
              href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              {/* Ташкент */}
            </a>
            <a
              href="https://yandex.uz/maps/10335/tashkent/?ll=69.263300%2C41.284644&utm_medium=mapframe&utm_source=maps&z=14"
              style={{
                color: "#fff",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              {/* Ташкент — Яндекс.Карты */}
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/-/CCUyQOuFdC"
              width="100%"
              height="100%"
              frameborder="1"
              allowfullscreen="true"
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </div>
    </>
  );
}

export default AdminContact;
