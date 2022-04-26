import Image from "next/image";
import Logo from "../public/image/logo.jpeg";

export default function footer() {
  return (
    <footer
      className="page-footer font-small blue"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3 address">
            <Image
              src={Logo}
              alt="logo"
              width={50}
              height={50}
              className="img-fluid "
            />
            <h5 className="">Pusbindiklat Gemilang</h5>
            <p>
              Jl. Karang Anyar Kecamatan Sawah Besar <br />
              Jakarta Selatan
            </p>
            {/* <div className="mt-md-5 social-media">
              <a href="#">
                <img
                  src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/bi_linkedin.svg"
                  alt="linkedin"
                  className="img-fluid"
                />
              </a>
              <a href="#">
                <img
                  src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/bi_facebook.svg"
                  alt="facebook"
                  className="img-fluid"
                />
              </a>
              <a href="#">
                <img
                  src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/bi_twitter.svg"
                  alt="twitter"
                  className="img-fluid"
                />
              </a>
              <a href="#">
                <img
                  src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/bi_twitch.svg"
                  alt="twitch"
                  className="img-fluid"
                />
              </a>
            </div> */}
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="row col-md-6 nav-footer">
            <div className="col-md-4 mb-md-0 mb-3">
              <p>Our Features</p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Profile</a>
                </li>
                <li>
                  <a href="#!">Prestasi</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
              <p>Company</p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Tentang Kami</a>
                </li>

                <li>
                  <a href="#!">Gabung Bersama Kami</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
              <p>Help</p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Chat Kami </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright row d-flex justify-content-center border-top mx-0 text-center">
        <p className="my-0">
          2022 Pusbindiklat Gemilang | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
