import Squares from "./reactBits/squares/Squares";
import Orb from "./reactBits/orbs/Orb";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import covalentSales from "./assets/covalentSales.png";
import digitMart from "./assets/digiMart.png";

import "./app.css";
export default function App() {
  return (
    <>
      <header className="w-100 position-fixed">
        <nav className="p-2">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link link-small" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-small" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-small" href="#techStack">
                Tech Stack
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-small" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="bg"></div>

      <main className="outer-wrapper">
        <div className="bg-orb">
          <Orb hoverIntensity={0} />
        </div>

        <section id="home">
          <div className="container intro-section d-flex flex-column align-items-center justify-content-center text-center text-light no-h">
            <h1 className="display-1 fw-bold">Mayank Singh</h1>
            <h1 className="display-6 font-light">Full Stack Developer</h1>
            <hr className="divider" />
            <div className="d-flex justify-content-center mb-3">
              <a
                className="text-light mx-2"
                href="https://github.com/mayank-singh-12"
                target="_blank"
              >
                <i className="bi bi-github fs-1 icon"></i>
              </a>
              <a
                className="text-light mx-2"
                href="https://www.linkedin.com/in/mayank-singh-8a03a21a3/"
                target="_blank"
              >
                <i className="bi bi-linkedin fs-1 icon"></i>
              </a>
              <a
                className="text-light mx-2"
                href="https://drive.google.com/file/d/1DmhoJvSZEkpDplyLVFoRN5XCV8TJEsvX/view?usp=sharing"
                target="_blank"
              >
                <i className="bi bi-file-earmark-person-fill fs-1 icon"></i>
              </a>
            </div>
            <h4 className="font-light font-small">
              From MERN to whatever’s next – I learn the tech that your project
              needs.
            </h4>
          </div>
        </section>

        <div className="glass-container">
          <section id="projects">
            <div className="container custom-container">
              <h1 className="fw-bold text-light">Projects</h1>
              <p className="font-light">Solving Real World Problems</p>
              <hr className="divider" />
              <div className="row g-4 pt-5">
                {/* Project 1 */}
                <div className="col-sm-6 col-12 p-0 d-flex justify-content-center">
                  <div className="card proj-card glass-container">
                    <img
                      src={covalentSales}
                      className="card-img-top"
                      alt="covalentSales"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Covalent Sales</h5>

                      <p className="card-text">
                        A focused CRM dashboard for managing leads with quick
                        filtering and status‑based insights.
                      </p>

                      <div className="mb-3">
                        <span className="badge text-bg-light me-2">React</span>
                        <span className="badge text-bg-light me-2">
                          Node.js
                        </span>
                        <span className="badge text-bg-light me-2">
                          Express.js
                        </span>
                        <span className="badge text-bg-light me-2">
                          Mongoose
                        </span>
                        <span className="badge text-bg-light me-2">
                          Chart.js
                        </span>
                      </div>

                      <a
                        className="fs-5 text-light text-decoration-none me-4"
                        href="https://frontend-covalent-sales.vercel.app/"
                        target="_blank"
                      >
                        <i className="bi bi-box-arrow-up-right"></i> Link
                      </a>

                      <a
                        className="fs-5 text-light text-decoration-none"
                        href="https://github.com/mayank-singh-12/frontend_CovalentSales"
                      >
                        <i className="bi bi-code-slash"></i> Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project 2 */}
                <div className="col-sm-6 col-12 p-0 d-flex justify-content-center">
                  <div className="card proj-card glass-container">
                    <img
                      src={digitMart}
                      className="card-img-top"
                      alt="DigiMart"
                    />
                    <div className="card-body">
                      <h5 className="card-title">DigiMart</h5>

                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card’s content.
                      </p>

                      <div className="mb-3">
                        <span className="badge text-bg-light me-2">React</span>
                        <span className="badge text-bg-light me-2">
                          Node.js
                        </span>
                        <span className="badge text-bg-light me-2">
                          Express.js
                        </span>
                        <span className="badge text-bg-light me-2">
                          Mongoose
                        </span>
                      </div>

                      <a
                        className="fs-5 text-light text-decoration-none me-4"
                        href="https://frontend-digi-mart.vercel.app/"
                        target="_blank"
                      >
                        <i className="bi bi-box-arrow-up-right"></i> Link
                      </a>

                      <a
                        className="fs-5 text-light text-decoration-none"
                        href="https://github.com/mayank-singh-12/frontend_DigiMart"
                        target="_blank"
                      >
                        <i className="bi bi-code-slash"></i> Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="techStack">
            <div className="container custom-container">
              <h1 className="fw-bold">Tech Stack</h1>
              <p className="font-light">Technologies and tools I work with</p>
              <hr className="divider" />
              <div className="row mt-5">
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-react-original mx-2"></i> React
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-nodejs-plain mx-2"></i> Node.js
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-express-original mx-2"></i>
                    Express.js
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-mongodb-plain mx-2"></i> MongoDB
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-mongoose-original mx-2"></i> Mongoose
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-chartjs-plain mx-2"></i> Chart.js
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-vitejs-plain mx-2"></i> Vite
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-python-plain mx-2"></i> Python
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-flask-original mx-2"></i> Flask
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-postgresql-plain mx-2"></i> PostgreSQL
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-6">
                    <i className="devicon-sqlalchemy-plain mx-2"></i> SQLAlchemy
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-5">
                    <i className="devicon-vscode-plain mx-2"></i> VS Code
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-5">
                    <i className="devicon-npm-plain mx-2"></i> npm
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-5">
                    <i className="devicon-git-plain mx-2"></i> Git
                  </p>
                </div>
                <div className="col-sm-3 col-6 mt-2">
                  <p className="fs-5">
                    <i className="devicon-github-plain mx-2"></i> GitHub
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="container custom-container">
              <h1 className="fw-bold">Contact</h1>
              <p className="font-light">
                Ready to craft amazing projects as a team
              </p>
              <hr className="divider" />

              <div className="row my-5 g-4">
                <div className="col-sm-6 col-12">
                  <a
                    className="card glass-container text-decoration-none"
                    href="https://mail.google.com/mail/u/0/?view=cm&to=dev.by.mayank@gmail.com"
                    target="_blank"
                  >
                    <div className="card-body">
                      <div className=" d-flex justify-content-start align-items-center">
                        <i className="bi bi-envelope-at-fill fs-2"></i>
                        <p className="fs-2 fw-medium m-0 ms-3">Email</p>
                      </div>
                      <p className="my-2">dev.by.mayank@gamil.com</p>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6 col-12">
                  <a
                    className="card glass-container text-decoration-none"
                    href="https://github.com/mayank-singh-12"
                    target="_blank"
                  >
                    <div className="card-body">
                      <div className=" d-flex justify-content-start align-items-center">
                        <i className="bi bi-github fs-2"></i>
                        <p className="fs-2 fw-medium m-0 ms-3">GitHub</p>
                      </div>
                      <p className="my-2">Follow on GitHub</p>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6 col-12">
                  <a
                    className="card glass-container text-decoration-none"
                    href="https://www.linkedin.com/in/mayank-singh-8a03a21a3/"
                    target="_blank"
                  >
                    <div className="card-body">
                      <div className=" d-flex justify-content-start align-items-center">
                        <i className="bi bi-linkedin fs-2"></i>
                        <p className="fs-2 fw-medium m-0 ms-3">LinkedIn</p>
                      </div>
                      <p className="my-2">Connect on LinkedIn</p>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6 col-12">
                  <a
                    className="card glass-container text-decoration-none"
                  >
                    <div className="card-body">
                      <div className=" d-flex justify-content-start align-items-center">
                        <i className="bi bi-file-earmark-person fs-2"></i>
                        <p className="fs-2 fw-medium m-0 ms-3">Resume</p>
                      </div>
                      <p className="my-2">View my Resume</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="virtual-footer">
                <p className="text-center">&copy; 2025 Mayank Singh | All Rights Reserved</p>
              </div>

            </div>
          </section>
        </div>
      </main>
    </>
  );
}
