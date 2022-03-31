import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signUp } from "../services/achievement";

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
  const [foto, setfoto] = useState("");
  const [akte, setakte] = useState("");
  const [status, setStatus] = useState("Daftar Baru");

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
  const router = useRouter();

  const onSubmit = async () => {
    const form = {
      email,
      namaLengkap,
      tempatLahir,
      tanggalLahir,
      jenisKelamin,
      usia,
      tinggiBadan,
      beratBadan,
      agama,
      asalSekolah,
      tingkatanSabuk,
      tingkatanSekolah,
      unitLatihan,
      riwayatKesehatan,
      alamat,
      noTelp,
      foto,
      akte,
    };
    localStorage.setItem("form", JSON.stringify(form));
    const result = await signUp(form);
    console.log(result);
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
              tata tertibnya nya <Link href="/rules">disini</Link>
            </p>
            <form action="" method="post" encType="multipart/form-data">
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
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
                        value={namaLengkap}
                        onChange={(event) => setNamaLengkap(event.target.value)}
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
                    name="foto"
                    value={foto}
                    onChange={(event) => setfoto(event.target.value)}
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
                    value={akte}
                    onChange={(event) => setakte(event.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-info my-3"
                  onClick={onSubmit}
                >
                  Lakukan Pendaftaran Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
