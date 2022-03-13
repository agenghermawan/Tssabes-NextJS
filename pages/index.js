/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export async function getStaticProps() { 
   const res = await fetch('http://127.0.0.1:8000/api/daftar-gallery')
  const data = await res.json()
  return {
    props: {
      images : data.data,
    }
  }
}

function Home({images})  {
  return (
    <div>
      <div className="container">
        <div className="hero mt-2 row">
          <div className="col-12 col-md-6">
            <div className="text-hero mt-5">
              <h1 className='title-banner fs-1'>  Padepokan Rajawali Perguruan Bela diri </h1>
            
            </div>
            <div className="button-hero mt-5">
              <p> Buka hari ini </p>
              <p> Sampai pukul 21.00 </p>
              <input
                type="text"
                className="form-control mt-5"
              ></input>
              <button className="btn btn-primary mt-3">
                WhatsApp : 0812-8400-7005
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Image 
              src="/image/banner.jpg"
              layout='responsive'
              className="shadow rounded-circle"
              alt=""
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
        <div className="Galeri my-5">
          <h2 className="text-center">Galeri</h2>
          <p className="text-center"> Foto diambil saat Latihan Bersama </p>

          <div className="image-list row">
            {images.map((image) =>(
              <div className="col-12 col-md-4 mt-3" key={image.id}>
                    <Image
                      className="rounded shadow"
                      layout='responsive'
                      width={500}
                      height={300}
                      src={image.image}
                      alt=""
                    >
                    </Image>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial">
          <h3 className="text-center">Testi</h3>
          <p className="text-center"> Testimoni dari pengguna </p>
          <div className="row my-5">
            <div className="col-12 col-md-4 p-3">
              <div className="row">
                <div className="col-12 col-md-2">
                  <Image
                    src="/image/profile-achivment.jpg"
                    layout='responsive'
                    width={70}
                    height={70}
                    className="rounded-circle"
                    alt=""
                  >
                  </Image>
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
                    layout='responsive'
                    width={70}
                    height={70}
                    className="rounded-circle"
                    alt=""
                  >
                  </Image>
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
                    layout='responsive'
                    width={70}
                    height={70}
                    className="rounded-circle"
                    alt=""
                  >
                  </Image>
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
            >
            </Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;