import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

export default function index() {
  const whychooseus = useRef(null);
  const ourService = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <p className="font-bold  " ref={home}>
        Welcome to Cleverbit
      </p>
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
                <Link
                  onClick={() => scrollToSection(home)}
                  className="nav-link   active"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => scrollToSection(whychooseus)}
              >
                <Link className="nav-link">Why Choose Us</Link>
              </li>
              <li
                className="nav-item"
                onClick={() => scrollToSection(ourService)}
              >
                <Link className="nav-link">Our Service</Link>
              </li>
              <li className="nav-item" onClick={() => scrollToSection(contact)}>
                <Link className="nav-link">Contact</Link>
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
  
          <div id="variations" className="variations" ref={ourService}>
{/*            
          <div className="first-variation">
              <div className="text">
                <figure className="quote text-start">
                  <blockquote className="blockquote">
                    <p>Who Are We?</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    CEO's Message <cite title="Source Title">MAM.Aasim</cite>
                  </figcaption>
                </figure>
                <p className="text-justify">
                  Welcome to Cloverbyte, your number one source for the
                  development of custom applications. We are committed to
                  providing you with the very best solution in technology, with
                  an emphasis on quality, reliability and maintainability. In
                  other words, we aim for our delivered solutions to "look
                  great, function great, and stay up-to-date". Cloverbyte is a
                  team of passionate technologists dedicated to providing
                  first-class solutions to our customers. From the ground up we
                  will develop a program to fit your needs or expand your
                  existing process. We are specialized in a wide range of
                  software and systems engineering, especially related to
                  cloud-based systems, UI/UX design, and mobile application
                  development. Our ability to create the best combination of
                  technological knowledge and professional experience to meet
                  unique consumer requirements is part of the value you get by
                  partnering with Cloverbyte. We are a small business, proudly
                  based on the passion and skills of our employees. If you like
                  what we are about and enjoy our services as much as we enjoy
                  delivering them, or if you have any questions or feedback,
                  please feel free to contact us. Join us on our journey!
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

              <div className="img rounded:10px">
                <img src="/assets/img/workplace.webp" alt="" />
              </div>
            </div> */}
            
           
           
            <div className="first-variation">
              <div className="img">
                <img src="/assets/img/man.png" alt="" />
              </div>
              <div className="text">
                <h1 className="variations-h1">Our Services</h1>
                <p className="text-justify">
                  <b> - Web & Desktop Applications:</b>
                </p>
                <p className="text-justify">
                  An attractive and interactive website goes a long way to
                  building your company's brand, delivering a message, or making
                  sales. Every application should not only "get the job done",
                  but look amazing while doing so.
                </p>

                <p>
                  <b>- Mobile App Development:</b>
                </p>
                <p className="text-justify">
                  We specialize in developing native and hybrid mobile
                  applications for iOS and Android devices. What better way to
                  get your products to customers than to be on their personal
                  device.
                </p>

                <p>
                  <b>- Cloud Solutions:</b>
                </p>
                <p className="text-justify">
                  Leverage a full suite of advanced networking, application and
                  hosting services. We specialize in creating custom cloud
                  solutions with Amazon Web Services and the Google Cloud
                  Platform.
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

            <div className="second-variation " ref={whychooseus}>
              <div className="text">
                <h1 className="variations-h1">Why Choose Us</h1>
                <p>
                  ++<b>Unparalleled expertise backed by years of experience.</b>
                  <p>
                    Years of experience fuel our unmatched expertise, delivering
                    excellence in every project
                  </p>
                </p>
                <p>
                  ++<b>Proven track record of successful project delivery.</b>
                  <p>
                    Consistent success in project delivery defines our proven
                    track record
                  </p>
                </p>
                <p>
                  ++
                  <b>Client-centric approach with a focus on collaboration.</b>
                  <p>
                    Our client-centric approach revolves around collaboration.
                    We prioritize your vision, ensuring a seamless partnership
                    for success.
                  </p>
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
              We are dedicated to exceeding client expectations and building
              lasting partnerships
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
                  Stay informed about the latest happenings at Cleverbit. We are
                  committed to keeping you in the loop with our most recent
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
                  <img src="/assets/img/team-1.png" alt="" />
                </div>
                <span className="name">MAM.AASIM</span>
                <span>CEO/Founder </span>
              </div>
              <div className="person">
                <div className="photo">
                  <img src="/assets/img/team-3.png" alt="" />
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
                  <img src="/assets/img/team-3.png" alt="" />
                </div>
                <span className="name">MIM. Rasmy</span>
                <span>Client Support</span>
              </div>
              <div className="person">
                <div className="photo">
                  <img src="/assets/img/team-2.png" alt="" />
                </div>
                <span className="name">M.Suhaith</span>
                <span>Associate Software Engineer</span>
              </div>
              <div className="person">
                <div className="photo">
                  <img src="/assets/img/team-3.png" alt="" />
                </div>
                <span className="name">name</span>
                <span>Position</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div ref={contact}>
        <Footer></Footer>
      </div>
    </>
  );
}
