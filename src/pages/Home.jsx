import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

export default function index() {
  return (
    <>
      <p className="font-bold  ">Welcome to Cleverbit</p>
      <nav className="navbar navbar-expand-xl fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="/assets/img/logo_sideText.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link  active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                Why Choose Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                Our Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="right navbar-nav ms-auto">
              <li className="nav-item-right">
                <Link className="nav-link-right" to="#">
                  Login / Sign Up
                </Link>
              </li>
              <li className="nav-item-right">
                <Link className="nav-link-right btn-fill" to="#">
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="intro pb-5">
            <div className="intro-text">
              <h1 className="intro-h1 ">Welcome to Cleverbit</h1>
              <p className="front-page">
                At Cleverbit, we're passionate about crafting cutting-edge
                solutions that drive innovation and transform ideas into
                reality. Explore our world of software development excellence.
              </p>
              <div className="buttons">
                <Link to="" className="btn-fill">
                  Read More
                </Link>
                <Link to="" className="btn-outline">
                  Start Today
                </Link>
              </div>
            </div>
            <div className="intro-img">
              <img src="/assets/img/header-img.png" alt="" />
            </div>
            {/* <div className="scroll">
          <Link to="#variations"><img src="/assets/img/icon/icon-scroll-down.svg" alt=""/><span className="text-muted">Scroll down</span></Link>
        </div> */}
          </div>

          <div className="clients text-center">
            <p className="text-muted text-uppercase pb-4">
              Some of our trusted clients
            </p>
            <div className="client-logo">
              <div>
                <img src="/assets/img/ifslogo.png" alt="" />
              </div>
              <div>
                <img src="/assets/img/mclogo.png" alt="" />
              </div>
              <div>
                <img src="/assets/img/icon/firmbee-logo.svg" alt="" />
              </div>
              <div>
                <img src="/assets/img/icon/create-paper.svg" alt="" />
              </div>
              <div>
                <img src="/assets/img/icon/point-design-logo.svg" alt="" />
              </div>
            </div>
          </div>

          <div id="variations" className="variations">
            <div className="first-variation">
              <div className="img">
                <img src="/assets/img/man.png" alt="" />
              </div>
              <div className="text">
                <h1 className="variations-h1">Our Services</h1>
                <p>
                  <b> Web Application Development:</b>
                </p>
                <p>
                  {" "}
                  Responsive and scalable web applications for a seamless user
                  experience.
                </p>

                <p>
                  <b>Mobile App Development:</b>
                </p>
                <p>
                  iOS, Android, and cross-platform app development for maximum
                  reach.
                </p>

                <p>
                  <b>Custom Software Development:</b>
                </p>
                <p>
                  Tailored solutions to address your unique business challenges.
                </p>

                <p>
                  <b>Consulting and Strategy:</b>
               
                </p>
                <p>
                  Strategic insights to guide your digital transformation
                  journey.
                </p>

                <div className="buttons">
                  <Link to="" className="btn-fill">
                    Read More
                  </Link>
                  <Link to="" className="btn-outline">
                    Start Today
                  </Link>
                </div>
              </div>
            </div>

            <div className="second-variation">
              <div className="text">
                <h1 className="variations-h1">Why Choose Us</h1>
                <p>
                  ++<b>Unparalleled expertise backed by years of experience.</b>
                <p>Years of experience fuel our unmatched expertise, delivering excellence in every project</p>  
                </p>
                <p  >
                  ++<b>Proven track record of successful project delivery.</b>
                  <p>Consistent success in project delivery defines our proven track record</p>
                </p>
                <p  >
                  ++
                  <b>Client-centric approach with a focus on collaboration.</b>
                  <p>Our client-centric approach revolves around collaboration. We prioritize your vision, ensuring a seamless partnership for success.</p>
                </p>

                <div className="buttons">
                  <Link to="" className="btn-fill">
                    Read More
                  </Link>
                  <Link to="" className="btn-outline">
                    Start Today
                  </Link>
                </div>
              </div>
              <div className="img">
                <img src="/assets/img/woman.png" alt="" />
                <img
                  className="square"
                  src="/assets/img/icon/square.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="service">
            <h1>Our successful stories with clients</h1>
            <p className="front-page">
            We are dedicated to exceeding client expectations and building lasting partnerships
            </p>
            <div className="service-items">
              <div className="item">
                <img src="/assets/img/icon/code-icon.svg" alt="" />
                <span className="counter">10000</span>
                <span>
                  Kilometers <br />
                  of code written
                </span>
              </div>
              <div className="item">
                <img src="/assets/img/icon/cofee-icon.svg" alt="" />
                <span className="counter">25</span>
                <span>
                  Coffees
                  <br />
                  drunk
                </span>
              </div>
              <div className="item">
                <img src="/assets/img/icon/satisfied-client-icon.svg" alt="" />
                <span className="counter">10</span>
                <span>
                  Satisfied
                  <br />
                  customers
                </span>
              </div>
              <div className="item">
                <img src="/assets/img/icon/realized-projects-icon.svg" alt="" />
                <span className="counter">10</span>
                <span>
                  Realized
                  <br />
                  projects
                </span>
              </div>
            </div>
          </div>

          <div className="update-news">
            <div className="row">
              <div className="col-md-5 news-text">
                <h2>Get your update news</h2>
                <p>
                  Stay informed about the latest happenings at Cleverbit. We
                  are committed to keeping you in the loop with our most recent
                  developments, product releases, and industry insights.
                </p>
              </div>
              <div className="col-md-7 news-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id=""
                />
                <button type="submit">Send</button>
              </div>
            </div>
          </div>

          <div className="team text-center">
            <h1>Our Team</h1>
            <p className="front-page">
              Our team comprises seasoned professionals in [relevant fields such
              as software development, design, marketing, etc.]. With a wealth
              of experience, we bring a deep understanding of [specific industry
              knowledge] to every project.
            </p>
            <div className="team-person">
              <div className="person">
                <div className="photo">
                  <img src="/assets/img/team-2.png" alt="" />
                </div>
                <span className="name">MAM.AASIM</span>
                <span>CEO/Founder </span>
                <span>Tech Lead</span>
              </div>
              <div className="person">
                <div className="photo">
                  <img src="/assets/img/team-2.png" alt="" />
                </div>
                <span className="name">Vinoth</span>
                <span>UI/UX Engineer</span>
              </div>
              <div className="person">
                <div className="photo">
                  <img src="/assets/img/team-3.png" alt="" />
                </div>
                <span className="name">Kumuthiny</span>
                <span>Project Manager</span>
              </div>
              <div className="person">
                <div className="photo">
                  <img src="/assets/img/team-2.png" alt="" />
                </div>
                <span className="name">x</span>
                <span>Associate Software Engineer</span>
              </div>
              <div className="person">
                <div className="photo">
                  <img src="/assets/img/team-2.png" alt="" />
                </div>
                <span className="name">Suhaith</span>
                <span>Associate Software Engineer</span>
              </div>
              <div className="person">
                <div className="photo">
                  <img src="/assets/img/team-2.png" alt="" />
                </div>
                <span className="name">x</span>
                <span>Associate Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
