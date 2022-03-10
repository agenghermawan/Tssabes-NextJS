import Link from "next/link";
export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand fw-normal" href="#">
            PUSBINDIKLAT GEMILANG
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
                <a className="nav-link" href="/about">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Tata Tertib
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  {" "}
                  Prestasi{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  {" "}
                  Pendaftaran{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
