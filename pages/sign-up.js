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

export default function SignUp() {
  const [emailParent, setEmailParent] = useState("");
  const [namaLengkapParent, setNamaLengkapParent] = useState("");
  const [tempatLahirParent, setTempatLahirParent] = useState("");
  const [tanggalLahirParent, setTanggalLahirParent] = useState("");
  const [jenisKelaminParent, setJenisKelaminParent] = useState("");
  const [usiaParent, setUsiaParent] = useState("");
  const [tinggiBadanParent, setTinggiBadanParent] = useState("");
  const [beratBadanParent, setBeratBadanParent] = useState("");
  const [agamaParent, setAgamaParent] = useState("");
  const [pekerjaanParent, setPekerjaanParent] = useState("");
  const [alamatParent, setAlamatParent] = useState("");
  const [noTelpParent, setnoTelpParent] = useState("");
  const [fotoParent, setFotoParent] = useState("");

  const [status, setStatus] = useState("Daftar Baru");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const localForm = localStorage.getItem("user-form");
    const form = JSON.parse(localForm);
    const data = new FormData();

    data.append("emailParent", emailParent);
    data.append("namaLengkapParent", namaLengkapParent);
    data.append("tempatLahirParent", tempatLahirParent);
    data.append("tanggalLahirParent", tanggalLahirParent);
    data.append("jenisKelaminParent", jenisKelaminParent);
    data.append("usiaParent", usiaParent);
    data.append("tinggiBadanParent", tinggiBadanParent);
    data.append("beratBadanParent", beratBadanParent);
    data.append("agamaParent", agamaParent);
    data.append("pekerjaanParent", pekerjaanParent);
    data.append("alamatParent", alamatParent);
    data.append("noTelpParent", noTelpParent);
    data.append("fotoParent", fotoParent);

    data.append("email", form.email);
    data.append("namaLengkap", form.namaLengkap);
    data.append("tempatLahir", form.tempatLahir);
    data.append("tanggalLahir", form.tanggalLahir);
    data.append("jenisKelamin", form.jenisKelamin);
    data.append("usia", form.usia);
    data.append("tinggiBadan", form.tinggiBadan);
    data.append("beratBadan", form.beratBadan);
    data.append("agama", form.agama);
    data.append("asalSekolah", form.asalSekolah);
    data.append("tingkatanSabuk", form.tingkatanSabuk);
    data.append("tingkatanSekolah", form.tingkatanSekolah);
    data.append("unitLatihan", form.unitLatihan);
    data.append("riwayatKesehatan", form.riwayatKesehatan);
    data.append("alamat", form.alamat);
    data.append("noTelp", form.noTelp);
    data.append("foto", form.foto);
    data.append("akte", form.akte);
    data.append("status", "Daftar Baru");

    const response = await axios
      // .post("http://tssabes.my.id/api/daftar-ulang", data, {
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
            <h3> Data orang tua / wali </h3>
            <p className="text-danger">
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
                      <label htmlFor="email"> Nama Orang Tua / wali :</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="namaLengkap"
                        value={namaLengkapParent}
                        onChange={(event) =>
                          setNamaLengkapParent(event.target.value)
                        }
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
                        value={emailParent}
                        onChange={(event) => setEmailParent(event.target.value)}
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
                        value={tempatLahirParent}
                        onChange={(event) =>
                          setTempatLahirParent(event.target.value)
                        }
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
                        value={tanggalLahirParent}
                        onChange={(event) =>
                          setTanggalLahirParent(event.target.value)
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
                        value={jenisKelaminParent}
                        onChange={(event) =>
                          setJenisKelaminParent(event.target.value)
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
                        value={usiaParent}
                        onChange={(event) => setUsiaParent(event.target.value)}
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
                        value={tinggiBadanParent}
                        onChange={(event) =>
                          setTinggiBadanParent(event.target.value)
                        }
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
                        value={beratBadanParent}
                        onChange={(event) =>
                          setBeratBadanParent(event.target.value)
                        }
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
                        value={agamaParent}
                        onChange={(event) => setAgamaParent(event.target.value)}
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
                      <label htmlFor="email"> Pekerjaan:</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="pekerjaan"
                        value={pekerjaanParent}
                        onChange={(event) =>
                          setPekerjaanParent(event.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> Alamat:</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="alamatParent"
                        value={alamatParent}
                        onChange={(event) =>
                          setAlamatParent(event.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email"> No Telp:</label>
                      <input
                        type="text"
                        className="form-control shadow-sm rounded-xl"
                        name="telp"
                        value={noTelpParent}
                        onChange={(event) =>
                          setnoTelpParent(event.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12 my-3">
                  <label htmlFor="foto" className="mb-2">
                    {" "}
                    Foto Orang tua / Wali
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/png image/jpeg"
                    onChange={(event) => {
                      console.log(event.target.files);
                      const image = event.target.files[0];
                      return setFotoParent(image);
                    }}
                  />
                </div>
                <div className="col-md-12 my-3">
                  <label
                    htmlFor="foto"
                    className="mb-2"
                    style={{ textAlign: "justify" }}
                  >
                    Menyetujui apa saja yang tertera dalam Peraturan Pusat
                    Pembinaan Pendidikan Latihan (PUSBINDIKLAT) GEMILANG serta
                    mempercayakan penuh terhadap kebijakan pengurus dan pelatih
                    dalam melaksanakan program ini.
                  </label>
                  <input
                    type="checkbox"
                    id="aggrement"
                    name="aggrement"
                    value="Agre"
                    required
                  />
                  <label htmlFor="aggrement"> &nbsp; Setuju</label>
                  <br />
                </div>
                <button
                  className="cssbuttons-io-button mt-3"
                  onClick={onSubmit}
                >
                  Lakukan pendaftaran sekarang
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
