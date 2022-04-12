import Image from "next/image";
import style from "../styles/Profile.module.css";
import ImageProfile from "../public/image/profile.png";
import ImageGroup from "../public/image/Profile-Group.png";
export default function profile() {
  return (
    <section
      className="h-100 w-100 bg-white"
      style={{ boxSizing: "border-box" }}
    >
      <div
        className="content-3-1 container-xxl mx-auto position-relative"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="d-flex flex-lg-row flex-column align-items-center">
          <div className="img-hero text-center justify-content-center d-flex">
            <Image
              id="hero"
              className="img-fluid"
              src={ImageProfile}
              alt="image"
              width={643}
              height={537}
            />
          </div>

          <div className="right-column d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
            <h2 className="title-text">3 Keuntungan Pusbindiklat Gemilang</h2>
            <ul className="p-0 m-0">
              <li className="list-unstyled">
                <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                  <span className="circle text-white d-flex align-items-center justify-content-center">
                    1
                  </span>
                  Trusted Mentor
                </h4>
                <p className="text-caption">
                  We have provided highly experienced mentors
                  <br className="d-sm-inline d-none" />
                  for several years.
                </p>
              </li>
              <li className="list-unstyled">
                <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                  <span className="circle text-white d-flex align-items-center justify-content-center">
                    2
                  </span>
                  Access Forever
                </h4>
                <p className="text-caption">
                  Are you busy at work so its hard to consult? dont
                  <br className="d-sm-inline d-none" />
                  worry because you can access anytime.
                </p>
              </li>
              <li className="list-unstyled">
                <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                  <span className="circle text-white d-flex align-items-center justify-content-center">
                    3
                  </span>
                  Halfpenny
                </h4>
                <p className="text-caption">
                  We provide economical packages for those of you
                  <br className="d-sm-inline d-none" />
                  who are still in school or workers.
                </p>
              </li>
            </ul>
            <div className="row">
              <div className="col-auto">
                <a className="btn btn-learn text-white">
                  <i className="fas fa-phone-alt mr-2" />
                  &nbsp; 0812-8400-7005
                </a>
              </div>
              <div className="col-auto">
                <a className="btn btn-learn text-white">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;Klik Map Disini
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center text-center section-profile">
          <div className="col-md-12 col-12">
            <Image src={ImageGroup} alt="imageGroup"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
