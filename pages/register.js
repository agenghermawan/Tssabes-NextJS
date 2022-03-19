import React from "react";
import Image from "next/image";
import { useEffect } from "react";

export default function Register() {
  const nextForm = () => {
    const firstForm = document.getElementById("first-form");
    const secondForm = document.getElementById("second-form");

    if (firstForm.style.display === "none") {
      firstForm.style.display = "block";
    } else {
      firstForm.style.display = "none";
      secondForm.style.display = "block";
    }
  };

  const back = () => {
    const firstForm = document.getElementById("first-form");
    const secondForm = document.getElementById("second-form");
    if (secondForm.style.display === "none") {
      firstForm.style.display = "block";
    } else {
      secondForm.style.display = "none";
      firstForm.style.display = "block";
    }
  };
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 col-md-6">
            <Image src="/image/image.jpg" width="600px" height="400px" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <h3> Pendaftaran </h3>
            <p>
              {" "}
              Sebelum melakukan pendaftaran baca terlebih dahulu aturan atau
              tata tertibnya nya <a href="{{ route('Rules') }}">disini </a>{" "}
            </p>
            <form action="" method="post" encType="multipart/form-data">
              <input type="hidden" name="status" value="PendaftaranUlang" />
              <div className="first-form" id="first-form">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Nama Lengkap :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="namaLengkap"
                        value=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Email :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="email"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Tempat Lahir :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="tempatLahir"
                        value=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Tanggal Lahir :</label>
                      <input
                        type="date"
                        className="form-control shadow-sm rounded-xl"
                        name="tanggalLahir"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Jenis Kelamin :</label>
                      <select
                        name="jenisKelamin"
                        className="form-control"
                        id="jenisKelamin"
                      >
                        <option value="LakiLaki"> Laki Laki </option>
                        <option value="Perempuan"> Perempuan </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Usia :</label>
                      <input
                        type="number"
                        className="form-control shadow-sm rounded-xl"
                        name="usia"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Tinggi Badan :</label>
                      <input
                        type="number"
                        className="form-control shadow-sm rounded-xl"
                        name="tinggiBadan"
                        value=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Berat Badan :</label>
                      <input
                        type="number"
                        className="form-control shadow-sm rounded-xl"
                        name="beratBadan"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Agama :</label>
                      <select name="agama" className="form-control" id="agama">
                        <option value="Islam"> Islam </option>
                        <option value="Hindu"> Hindu </option>
                        <option value="Budha"> Budha </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Asal Sekolah :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="asalSekolah"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">
                        {" "}
                        Tingkatan Sekolah (Kelas) :
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="tingkatanSekolah"
                        value=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Unit Latihan :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="unitLatihan"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Tingkatan Sabuk (Kelas) :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="tingkatanSabuk"
                        value=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Riwayat Kesehatan :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="riwayatKesehatan"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Alamat :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="alamat"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> No Telepon :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="noTelp"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <a className="btn btn-info" id="hide" onClick={nextForm}>
                  {" "}
                  Selanjutnya{" "}
                </a>
              </div>

              <div
                className="row my-3"
                id="second-form"
                style={{ display: "none" }}
              >
                <div className="col-md-12 my-3">
                  <label htmlFor="foto" className="mb-2">
                    {" "}
                    Foto(Background Putih Menggunakan Baju Tapak Suci)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="foto"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="akte" className="mb-2">
                    {" "}
                    Akte ( Foto )
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="akte"
                    value=""
                  />
                </div>
                <div className="row">
                  <div className="container">
                    <a
                      type="submit"
                      className="btn btn-info my-2"
                      id="back"
                      onClick={back}
                    >
                      {" "}
                      Kembali{" "}
                    </a>
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Lakukan Pendaftaran
                    </button>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Konfirmasi Pendaftaran
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Apakah data yang dimasukan sudah benar ?
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          {" "}
                          Keluar
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Lakukan Pendaftaran Sekarang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
