import React from "react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signUp } from "../services/achievement";
import { csrfToken } from "next-csrf";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [usia, setusia] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [beratBadan, setberatBadan] = useState("");
  const [agama, setagama] = useState("");
  const [asalSekolah, setasalSekolah] = useState("");
  const [tingkatanSekolah, settingkatanSekolah] = useState("");
  const [unitLatihan, setunitLatihan] = useState("");
  const [tingkatanSabuk, settingkatanSabuk] = useState("");
  const [riwayatKesehatan, setriwayatKesehatan] = useState("");
  const [alamat, setalamat] = useState("");
  const [noTelp, setnoTelp] = useState("");
  const [foto, setfoto] = useState(null);
  const [akte, setakte] = useState(null);
  const [status, setStatus] = useState("Daftar Baru");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append("email", email);
    data.append("namaLengkap", namaLengkap);
    data.append("tempatLahir", tempatLahir);
    data.append("tanggalLahir", tanggalLahir);
    data.append("jenisKelamin", jenisKelamin);
    data.append("usia", usia);
    data.append("tinggiBadan", tinggiBadan);
    data.append("beratBadan", beratBadan);
    data.append("agama", agama);
    data.append("asalSekolah", asalSekolah);
    data.append("tingkatanSabuk", tingkatanSabuk);
    data.append("tingkatanSekolah", tingkatanSekolah);
    data.append("unitLatihan", unitLatihan);
    data.append("riwayatKesehatan", riwayatKesehatan);
    data.append("alamat", alamat);
    data.append("noTelp", noTelp);
    data.append("foto", foto);
    data.append("akte", akte);
    data.append("status", "Daftar Ulang");
    const response = await axios
      .post("https://pusbindiklat-gemilang.com/api/daftar-ulang", data, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "content-type": "multipart/form-data",
        },
        withCredehtials: true,
      })
      .catch((err) => err.response);
    if (response.data.errors) {
      toast.error("Data yang anda masukan salah");
      setErrors(Object.values(response.data.errors).flat());
    } else {
      setSuccess("Berhasil Mendaftar ");
      toast.success(
        "Berhasil Daftar Baru Silahkan menunggu pihak kami akan mengehubungi mu "
      );
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
            <h3> Pendaftaran Ulang</h3>
            <p>
              {" "}
              Sebelum melakukan pendaftaran baca terlebih dahulu aturan atau
              tata tertibnya nya <Link href="/rules">disini</Link>
            </p>
            <ul className="mt-3 list-disc list-inside text-sm text-red-600">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <form>
              <input type="hidden" name="status" value={status} />
              <div className="first-form" id="first-form">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Nama Lengkap :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="namaLengkap"
                        value={namaLengkap}
                        onChange={(event) => setNamaLengkap(event.target.value)}
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
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
                        name="tempatLahir"
                        className="form-control shadow-sm rounded-xl"
                        value={tempatLahir}
                        onChange={(event) => setTempatLahir(event.target.value)}
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
                        value={tanggalLahir}
                        onChange={(event) =>
                          setTanggalLahir(event.target.value)
                        }
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
                        value={jenisKelamin}
                        onChange={(event) =>
                          setJenisKelamin(event.target.value)
                        }
                      >
                        <option> Pilih Jenis Kelamin </option>
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
                        value={usia}
                        onChange={(event) => setusia(event.target.value)}
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
                        value={tinggiBadan}
                        onChange={(event) => setTinggiBadan(event.target.value)}
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
                        value={beratBadan}
                        onChange={(event) => setberatBadan(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Agama :</label>
                      <select
                        name="agama"
                        className="form-control"
                        id="agama"
                        value={agama}
                        onChange={(event) => setagama(event.target.value)}
                      >
                        <option> Pilih Agama </option>
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
                        value={asalSekolah}
                        onChange={(event) => setasalSekolah(event.target.value)}
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
                        value={tingkatanSekolah}
                        onChange={(event) =>
                          settingkatanSekolah(event.target.value)
                        }
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
                        value={unitLatihan}
                        onChange={(event) => setunitLatihan(event.target.value)}
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
                        value={tingkatanSabuk}
                        onChange={(event) =>
                          settingkatanSabuk(event.target.value)
                        }
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
                        value={riwayatKesehatan}
                        onChange={(event) =>
                          setriwayatKesehatan(event.target.value)
                        }
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
                        value={alamat}
                        onChange={(event) => setalamat(event.target.value)}
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
                        value={noTelp}
                        onChange={(event) => setnoTelp(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 my-3">
                  <label htmlFor="foto" className="mb-2">
                    {" "}
                    Foto(Background Putih Menggunakan Baju Tapak Suci)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/png image/jpeg"
                    onChange={(event) => {
                      console.log(event.target.files);
                      const image = event.target.files[0];
                      return setfoto(image);
                    }}
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
                    accept="image/png image/jpeg"
                    onChange={(event) => {
                      console.log(event.target.files);
                      const image = event.target.files[0];
                      return setakte(image);
                    }}
                  />
                </div>
                <button
                  className="cssbuttons-io-button mt-3"
                  onClick={onSubmit}
                >
                  Lakukan Pendaftaran Ulang Sekarang
                  <div className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
