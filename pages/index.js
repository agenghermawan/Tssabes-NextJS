/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div>
      <div className="container">
        <div classNameName="hero mt-2 row">
          <div className="col-12 col-md-6">
            <div className="text-hero mt-5">
              <h1> Padepokan Rajawali Perguruan Bela diri </h1>
            </div>
            <div className="button-hero mt-5">
              <p> Buka hari ini </p>
              <p> Sampai pukul 21.00 </p>
              <input
                type="text"
                value="Lokasi : Sawah Besar"
                className="form-control mt-5"
              ></input>
              <button className="btn btn-primary mt-3">
                WhatsApp : 0812-8400-7005
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* <img
              src="{{ asset('image/banner.jpg') }}"
              width="100%"
              height="550px"
              className="shadow"
              style="border-radius: 80%"
              alt=""
            ></img> */}
          </div>
        </div>
        <div className="Galeri my-5">
          <h2 className="text-center">Galeri</h2>
          <p className="text-center"> Foto diambil saat Latihan Bersama </p>

          <div className="image-list row">
            <div className="col-12 col-md-4 mt-3">
              {/* <img
                className="rounded shadow"
                width="100%"
                height="300px"
                src=""
                data-iml="403"
                data-atf="false"
              >
              </img> */}
            </div>
          </div>
        </div>

        <div className="testimonial">
          <h3 className="text-center">Testi</h3>
          <p className="text-center"> Testimoni dari pengguna </p>
          <div className="row my-5">
            <div className="col-12 col-md-4 p-3">
              <div className="row">
                <div className="col-12 col-md-2">
                  {/* <img
                    src="{{ asset('image/profile-achivment.jpg') }}"
                    width="70px"
                    height="70px"
                    className="rounded-circle"
                    alt=""
                  >
                    {" "}
                  </img> */}
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
                  {/* <img
                    src="{{ asset('image/profile-achivment.jpg') }}"
                    width="70px"
                    height="70px"
                    className="rounded-circle"
                    alt=""
                  >
                    {" "}
                  </img> */}
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
                  {/* <img
                    src="{{ asset('image/profile-achivment.jpg') }}"
                    width="70px"
                    height="70px"
                    className="rounded-circle"
                    alt=""
                  >
                    {" "}
                  </img> */}
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
        </div>

        <div className="care row mt-5">
          <div className="col-12 col-md-6 mt-5">
            <h1> Punya Pertanyaan Kepada Kami ? </h1>
            <p>Hubungi Kami </p>
            <div className="row">
              <div className="col-12 col-md-3 mb-1">
                <button className="btn btn-info shadow rounded">
                  <i className="fas fa-comment"></i>
                  WhatsApp
                </button>
              </div>
              <div className="col-12 col-md-3 mb-1">
                <button className="btn btn-info shadow rounded">
                  <i className="fas fa-phone"></i> Telp
                </button>
              </div>
              <div className="col-12 col-md-3 mb-1">
                <button className="btn btn-info shadow rounded">
                  <i className="fas fa-map"></i>
                  Lihat Rute
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* <img
              src="{{ asset('image/image 5.png') }}"
              width="100%"
              height="400px"
              alt=""
            >
              {" "}
            </img> */}
          </div>
        </div>
      </div>
    </div>
  );
}
