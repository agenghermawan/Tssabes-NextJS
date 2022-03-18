import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Achievment() {
  const [prestasiList, setPrestasiList] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/daftar-prestasi/remaja"
    );
    setPrestasiList(response.data.data);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="image-achievement">
          <div className="text-center">
            <Image
              src="/image/archievment.jpg"
              width={400}
              className="rounded-circle"
              height={400}
              alt=""
            />
            <h3 className="my-3"> PRESTASI YANG TELAH DI RAIH </h3>
          </div>
        </div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Prestasi SD
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Prestasi Remaja
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Semua Prestasi
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row">
              {prestasiList.map((item) => {
                return (
                  <div className="col-12 col-md-4 mt-3">
                    <div className="card text-center" key={item.id}>
                      <div className="card-header"></div>
                      <div className="card-body">
                        <h5 className="card-title">{item.namaLengkap}</h5>
                        <Image
                          src="/image/archievment.jpg"
                          width="70px"
                          height="70px"
                          className="rounded-circle"
                          alt=""
                        />
                        <a href="#" className="btn btn-primary">
                          {item.tingkatanSekolah}{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row"></div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
