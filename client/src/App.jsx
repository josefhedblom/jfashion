import React from "react";
import Dressman from "./assets/Dressman.png";

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-collapse-init
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${Dressman})`,
            height: "400px",
          }}
        >
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "100%" }}>
            <div className="d-flex justify-content-center align-items-center h-300">
              <div className="text-white">
                <h1 className="mb-3">Wellcome to J - Fasion</h1>
                <h4 className="mb-3">were not a scam</h4>
                <a className="btn btn-outline-light btn-lg" href="#!" role="button">
                  Buy Buy Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <footer className="row row-cols-5 py-5 my-5 border-top container mx-auto">
        <div className="col">
          <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <p className="text-muted">© 2025</p>
        </div>

        <div className="col" />

        {[...Array(3)].map((_, index) => (
          <div className="col" key={index}>
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">Features</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">FAQs</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">About</a>
              </li>
            </ul>
          </div>
        ))}
      </footer>
    </>
  );
}

export default App;
