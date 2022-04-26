import React from "react";
import Image from "next/image";
export default function rules() {
  return (
    <div className="container">
      <div className="col-12 my-5">
        <div className="image-rules d-flex justify-content-center">
          <Image
            src="/image/rules.jpg"
            alt=""
            className="rounded shadow"
            width="700px"
            height="700px"
          ></Image>
        </div>
        <div className="text-rules">
          <h4
            className="text-center"
            style={{ color: "#3ad8ff", fontWeight: 700 }}
          >
            PERATURAN DAN TATA TERTIB PUSAT PEMBINAAN PENDIDIKAN LATIHAN
            (PUSBINDIKLAT)PENCAK SILAT GEMILANG
          </h4>
          <ul className="list-group my-5">
            <li
              className="list-group-item text-center"
              style={{
                backgroundColor: "#3ad8ff",
                fontWeight: 500,
                color: "white",
              }}
            >
              Semua peraturan dan tata tertib harus di patuhi oleh peserta
              Pusbindiklat Gemilang
            </li>
            <li className="list-group-item ">
              1. Peserta masih aktif dalam Perguruan Seni Beladiri Tapak Suci
              Cabang Sawah Besar
            </li>
            <li className="list-group-item">
              2. Iuran bulanan dibayar selambat-lambatnya pada minggu pertama
              dalam sebulan{" "}
            </li>
            <li className="list-group-item">
              3. Khusus anak Yatim/Piatu tidak dikenakan biaya. Kecuali ada yang
              menanggung menjadi Orangtua asuh{" "}
            </li>
            <li className="list-group-item">
              4. Setiap enam bulan sekali GEMILANG akan di revisi kembali
            </li>
            <li className="list-group-item">
              5. Siswa bersedia mengikuti peraturan yang telah ditetapkan oleh
              PUSBINDIKLAT GEMILANG
            </li>
            <li className="list-group-item">
              6. Siswa dituntut untuk Disiplin, Rajin, dan Tanggungjawab dalam
              berlatih
            </li>
            <li className="list-group-item">
              7. Siswa akan dikenakan tindakan kedisiplinan jika melanggar
              peraturan dalam latihan
            </li>
            <li className="list-group-item">
              8. Orangtua/Wali harus selalu berkoordinasi terhadap Pelatih dan
              Pengurus PUSBINDIKLAT GEMILANG
            </li>
            <li className="list-group-item">
              9. Orangtua/Wali harus mendukung penuh serta bertanggungjawab
              terhadap kebutuhan pengembangan Putra/Putrinya14. Apabila siswa
              cidera, Kami akan memberi Pertolongan Pertama pada Cidera Olahraga
              (PPCO) dan selebihnya diserahkan kepada Orangtua/Wali
            </li>
            <li className="list-group-item">
              10. Orangtua/Wali dan Siswa GEMILANG wajib mengisi dan
              menandatangani Surat Pernyataan yang telah disediakan.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
