import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import {
  AchievementRemaja,
  AchievementSD,
  AllAchievement,
} from "../services/achievement";

export default function Achievment() {
  const [prestasiList, setPrestasiList] = useState([]);
  const [prestasiListSD, setPrestasiListSD] = useState([]);
  const [prestasiListRemaja, setPrestasiListRemaja] = useState([]);

  const getListAchievement = useCallback(async () => {
    const data = await AllAchievement();
    const dataSD = await AchievementSD();
    const dataRemaja = await AchievementRemaja();

    setPrestasiListSD(dataSD);
    setPrestasiList(data);
    setPrestasiListRemaja(dataRemaja);
  }, []);

  useEffect(() => {
    getListAchievement();
  }, [getListAchievement]);

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
              Semua Prestasi
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
              Prestasi SD
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
                  <div className="col-12 col-md-4 mt-3" key={item.id}>
                    <div className="card">
                      <div className="card-header"></div>
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {item.namaLengkap}
                        </h5>
                        <div className="for-image text-center">
                          <Image
                            src="/image/archievment.jpg"
                            width="70px"
                            height="70px"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>

                        {item.daftarJuara.map((itemList) => {
                          return (
                            <div key={itemList.id}>
                              <p className="card-text mt-3">
                                <i className="fas fa-trophy "></i>
                                {itemList.Juara}
                              </p>
                            </div>
                          );
                        })}
                        <div className="tingkatanButton text-center">
                          <a href="#" className="btn btn-primary mt-3">
                            {item.tingkatanSekolah}{" "}
                          </a>
                        </div>
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
            <div className="row">
              {prestasiListRemaja.map((item) => {
                return (
                  <div className="col-12 col-md-4 mt-3" key={item.id}>
                    <div className="card">
                      <div className="card-header"></div>
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {item.namaLengkap}
                        </h5>
                        <div className="for-image text-center">
                          <Image
                            src="/image/archievment.jpg"
                            width="70px"
                            height="70px"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>

                        {item.daftarJuara.map((itemList) => {
                          return (
                            <div key={itemList.id}>
                              <p className="card-text mt-3">
                                <i className="fas fa-trophy "></i>
                                {itemList.Juara}
                              </p>
                            </div>
                          );
                        })}
                        <div className="tingkatanButton text-center">
                          <a href="#" className="btn btn-primary mt-3">
                            {item.tingkatanSekolah}{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="row">
              {prestasiListSD.map((item) => {
                return (
                  <div className="col-12 col-md-4 mt-3" key={item.id}>
                    <div className="card">
                      <div className="card-header"></div>
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {item.namaLengkap}
                        </h5>
                        <div className="for-image text-center">
                          <Image
                            src="/image/archievment.jpg"
                            width="70px"
                            height="70px"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>

                        {item.daftarJuara.map((itemList) => {
                          return (
                            <div key={itemList.id}>
                              <p className="card-text mt-3">
                                <i className="fas fa-trophy "></i>
                                {itemList.Juara}
                              </p>
                            </div>
                          );
                        })}
                        <div className="tingkatanButton text-center">
                          <a href="#" className="btn btn-primary mt-3">
                            {item.tingkatanSekolah}{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
