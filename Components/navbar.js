import Link from "next/link";
import Image from "next/image";

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <Image src="/image/logo.jpeg" width={40} height={40} alt=""></Image>
          <a className="navbar-brand fw-normal " href="#">
            PUSBINDIKLAT GEMILANG{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" href="">
                    Beranda
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/profile">
                  <a className="nav-link" href="">
                    Profile
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link" href="">
                    Tentang Kami
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/rules">
                  <a className="nav-link" href="">
                    Tata Tertib
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/achievement">
                  <a className="nav-link" href="">
                    Prestasi
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register">
                  <a className="nav-link">Pendaftaran</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
