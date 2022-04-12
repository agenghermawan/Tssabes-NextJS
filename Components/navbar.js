import Link from "next/link";
import Image from "next/image";
import Logo from "../public/image/logo.jpeg";

export default function navbar() {
  return (
    <section
      className="h-100 w-100 bg-white"
      style={{ boxSizing: "border-box" }}
    >
      <nav
        className="navbar-1-1 navbar navbar-expand-lg navbar-light p-4 px-md-4 mb-3 bg-body"
        style={{ fontFamily: "Poppins, sans serif" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image src={Logo} width={42} height={42} alt="Logo"></Image>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link px-md-4 active" aria-current="page">
                    Beranda
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/profile">
                  <a className="nav-link px-md-4">Profile</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link px-md-4">Tentang Kami</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/rules">
                  <a className="nav-link px-md-4">Tata Tertib </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/achievement">
                  <a className="nav-link px-md-4">Prestasi</a>
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link href="/register">
                <a
                  className="btn btn-get-started btn-get-started-blue text-white"
                  href="#"
                >
                  Daftar Sekarang
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
