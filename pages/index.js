/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import GalleryIndex from "../Components/gallery";
import { DaftarGallery } from "../services/achievement";
import Link from "next/link";

export default function Home() {
  const [listGallery, setListGallery] = useState([]);

  const GetListGallery = useCallback(async () => {
    const data = await DaftarGallery();
    setListGallery(data);
  }, []);

  useEffect(() => {
    GetListGallery();
  }, [GetListGallery]);
  return (
    <div>
      <div className="container">
        <div className="hero mt-2 row mb-5">
          <div className="col-12 col-md-6">
            <div className="text-hero mt-5">
              <p className="title-banner">
                {" "}
                Padepokan Rajawali Perguruan Bela diri{" "}
              </p>
            </div>
            <div className="button-hero mt-5">
              <p className="title-desc-page">
                {" "}
                Buka hari ini <br />
                Sampai pukul 21.00{" "}
              </p>
              <Link href="/register" passHref>
                <button
                  className="btn-get mt-3"
                  style={{
                    backgroundColor: "#0ec8f8",
                    color: "whitesmke",
                  }}
                >
                  Daftar Sekarang
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Image
              src="/image/banner.jpg"
              layout="responsive"
              className="shadow rounded-circle"
              alt=""
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
        <div className="row gap-lg-0 gap-2 text-center">
          <div className="col-lg-4">
            <div className="for-starter-image">
              <Image src="/image/start-2.png" width={80} height={80} alt="" />
            </div>
            <div className="for-starter-text">
              <p className="text-starter"> 1. Memulai </p>
              <p className="desc-starter">
                Memulai <br /> Menjadi yang terbaik
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="for-starter-image">
              <Image src="/image/start-1.png" width={80} height={80} alt="" />
            </div>
            <div className="for-starter-text">
              <p className="text-starter"> 2. Berlatih </p>
              <p className="desc-starter">
                {" "}
                Berlatih <br /> Agar menjadi yang terkuat{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="for-starter-image">
              <Image src="/image/start-3.png" width={80} height={80} alt="" />
            </div>
            <div className="for-starter-text">
              <p className="text-starter"> 3. Berkompetesi </p>
              <p className="desc-starter">
                Berkompetesi <br /> Menjadi yang terbaik
              </p>
            </div>
          </div>
        </div>
        <div className="Galeri my-5">
          <p className="title-banner">Galeri</p>
          <p className="title-desc-page"> Foto diambil saat Latihan Bersama </p>
          <div className="image-list row">
            {/* <GalleryIndex src="img-landing1.jpeg" />
          <GalleryIndex src="img-landing2.jpg" />
          <GalleryIndex src="img-landing3.jpg" />
          <GalleryIndex src="img-landing4.jpeg" />
          <GalleryIndex src="img-landing5.jpg" /> */}
            {listGallery.map((image) => (
              <div className="col-12 col-md-3 mt-3" key={image.id}>
                <Image
                  className="shadow img-galery"
                  layout="responsive"
                  width={180}
                  height={200}
                  src={image.image}
                  alt=""
                ></Image>
              </div>
            ))}
          </div>
        </div>
        <div className="reached container-fluid">
          <div className="row">
            <div className="col-md-4">
              <p className="reached-title"> 150++ </p>
              <p className="reached-text "> Peserta </p>
            </div>
            <div className="col-md-4">
              <p className="reached-title"> 150++ </p>
              <p className="reached-text "> Kejuaraan </p>
            </div>
            <div className="col-md-4">
              <p className="reached-title"> 150++ </p>
              <p className="reached-text "> Cabang </p>
            </div>
          </div>
        </div>

        {/* <div className="testimonial">
        <h3 className="text-center title-banner">Testi</h3>
        <p className="text-center title-desc-page">
          {" "}
          Testimoni dari pengguna{" "}
        </p>
        <div className="row my-5">
          <div className="col-12 col-md-4 p-3">
            <div className="row">
              <div className="col-12 col-md-2">
                <Image
                  src="/image/profile-achivment.jpg"
                  layout="responsive"
                  width={70}
                  height={70}
                  className="rounded-circle"
                  alt=""
                ></Image>
              </div>
              <div className="col-md-10">
                <h3> Will Jansen </h3>
                <p> Peserta</p>
              </div>
            </div>
            <p className="fw-light mt-2">
              "Kegiatan positif Tapak Suci, selain bela diri seni juga bisa
              untuk olahraga"
            </p>
          </div>
          <div className="col-12 col-md-4 p-3">
            <div className="row">
              <div className="col-12 col-md-2">
                <Image
                  src="/image/profile-achivment.jpg"
                  layout="responsive"
                  width={70}
                  height={70}
                  className="rounded-circle"
                  alt=""
                ></Image>
              </div>
              <div className="col-md-10">
                <h3> Will Jansen </h3>
                <p> Peserta</p>
              </div>
            </div>
            <p className="fw-light mt-2">
              "Kegiatan positif Tapak Suci, selain bela diri seni juga bisa
              untuk olahraga"
            </p>
          </div>
          <div className="col-12 col-md-4 p-3">
            <div className="row">
              <div className="col-12 col-md-2">
                <Image
                  src="/image/profile-achivment.jpg"
                  layout="responsive"
                  width={70}
                  height={70}
                  className="rounded-circle"
                  alt=""
                ></Image>
              </div>
              <div className="col-md-10">
                <h3> Will Jansen </h3>
                <p> Peserta</p>
              </div>
            </div>
            <p className="fw-light mt-2">
              "Kegiatan positif Tapak Suci, selain bela diri seni juga bisa
              untuk olahraga"
            </p>
          </div>
        </div>
      </div> */}

        <div className="row">
          <div className="col-12 col-md-6">
            <Image
              src="/image/Wavy_Lst-10_Single-03.jpg"
              width="600"
              height="400"
              alt=""
            ></Image>
          </div>
          <div className="col-12 col-md-6">
            <p className="title-promotion"> Bergabung bersama kami </p>
            <p className="desc-promotion">
              {" "}
              Berlatih dan menjadi <br /> yang terbaik{" "}
            </p>
            <Link href="/register" passHref>
              <button className="cssbuttons-io-button">
                {" "}
                Mulai Sekarang
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
            </Link>
          </div>
        </div>

        {/* <div className="care row mt-5">
        <div className="col-12 col-md-6 mt-5">
          <h1> Punya Pertanyaan Kepada Kami ? </h1>
          <p>Hubungi Kami </p>
          <div className="row">
            <div className="col-12 col-md-3 mb-1">
              <button className="btn btn-info shadow rounded button-contact">
                <i className="fas fa-comment"></i>
                WhatsApp
              </button>
            </div>
            <div className="col-12 col-md-3 mb-1">
              <button className="btn btn-info shadow rounded button-contact">
                <i className="fas fa-phone"></i> Telp
              </button>
            </div>
            <div className="col-12 col-md-3 mb-1">
              <button className="btn btn-info shadow rounded button-contact">
                <i className="fas fa-map"></i>
                Lihat Rute
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <Image
            src="/image/image 5.png"
            width="600"
            height="400"
            alt=""
          ></Image>
        </div>
      </div> */}
      </div>
    </div>
  );
}
