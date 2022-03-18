import React from "react";
import Image from "next/image";
export default function about({ style }) {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-6 mt-5">
            <h3 className="text-center fw-bold mb-3"> Tentang Kami </h3>
            <div className="text-about">
              <p>
                Tapak Suci <strong>Putera Muhammadiyah </strong> berdiri pada 31
                Juli 1963 di desa Kauman, Yogyakarta dan merupakan organisasi
                otonom ke-11 dari Organisasi Muhammadiyah. Tapak Suci termasuk
                dalam 10 Perguruan Historis IPSI, yaitu perguruan yang menunjang
                tumbuh dan berkembangnya IPSI sebagai organisasi. Tapak Suci
                berasas Islam, bersumber pada Al Quran dan As-Sunnah, dan
                berjiwa persaudaraan. Tapak Suci Cabang Sawah Besar sendiri
                mulai aktif saat Pendekar Besar Alm. Muhammad Anas mengembangkan
                ilmu beladirinya pada tahun 1981. Bapak Pendekar Besar Alm.
                Muhammad Anas juga mencetak bibit-bibit atlet pada masanya dan
                dilanjutkan kembali perjuangannya oleh pelatih-pelatih di Sawah
                Besar hingga saat ini demi terbentuknya regenerasi pesilat yang
                berprestasi.
              </p>
              <p>
                Hal ini tentunya akan memberikan rasa bangga untuk beliau,
                pelatih-pelatih senior lainnya, dan Orangtua Siswa yang sudah
                mempercayakan atlet-atlet atau putera-puterinya yang ingin
                berprestasi melalui cabang olahraga Pencak Silat melalui kami
                dengan PUSBINDIKLAT “GEMILANG” yang telah dibentuk untuk
                memfokuskan bibit-bibit atlet potensial yang direkomendasikan
                oleh Pelatih yang ada di Tapak Suci Cabang Sawah Besar. Gemilang
                sendiri berdiri pada 15 Oktober tahun 2014. Pelatih pun sudah
                memiliki Prestasi yang unggul hingga tingkat Internasional dan
                memiliki pengalaman melatih secara terprogram dengan keilmuan
                olahraga yang baik dan benar.
              </p>
              <p>
                Program-program GEMILANG pun sudah terstruktur sejak awal, yang
                terdiri dari; Program Latihan Teknik, Latihan Fisik & Sparing.
                Untuk pengalaman TIM ATLET GEMILANG sudah sering mencapai target
                dengan meraih Juara Umum di setiap event/kejuaraan dan juga
                mencetak atlet-atletnya untuk menjadi Juara. Kategori
                pembentukkan atlet yang ada dalam GEMILANG ada 2, yaitu kategori
                tanding dan seni. Pembentukkan atlet GEMILANG ini dibina dengan
                penuh kedisiplinan agar dapat mencetak bibit-bibit unggul baik
                secara jasmani & rohani.
              </p>

              <p className="fw-bold">
                {" "}
                Satu cita-cita kami yang ingin diwujudkan bersama oleh para
                Pengurus, Pelatih, Atlet dan Orangtua{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <Image
              src="/image/profile.jpg"
              alt=""
              className="rounded shadow"
              width="700px"
              height="700px"
            ></Image>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="0.55"
            d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,229.3C840,256,960,288,1080,298.7C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
