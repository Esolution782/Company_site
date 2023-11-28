import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

export default function index() {
  return (
  <>
    <nav className="navbar navbar-expand-xl fixed-top">
    <div className="container">
      <Link className="navbar-brand" to="./index.html"><img className="w-100" src="/assets/img/icon/logo.svg" alt=""/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link  active" to="./index.html">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./aboutus.html">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./contact.html">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./blog.html">Blog</Link>
          </li>         
        </ul>
        <ul className="right navbar-nav ms-auto">
          <li className="nav-item-right">
            <Link className="nav-link-right" to="#">Login / Sign Up</Link>
          </li>
          <li className="nav-item-right">
            <Link className="nav-link-right btn-fill" to="#">Start Today</Link>
          </li>       
        </ul>
      </div>
    </div>
  </nav>
  <main>
    <div className="container">
      <div className="intro pb-5">
        <div className="intro-text">
          <h1 className="intro-h1">Lorem Ipsum is not simply random text</h1>
          <p className="front-page">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div className="buttons">
            <Link to="" className="btn-fill">Read More</Link>
          <Link to="" className="btn-outline">Start Today</Link>
          </div>
        </div>
        <div className="intro-img">
            <img src="/assets/img/header-img.png" alt=""/>
        </div>
        <div className="scroll">
          <Link to="#variations"><img src="/assets/img/icon/icon-scroll-down.svg" alt=""/><span className="text-muted">Scroll down</span></Link>
        </div>
      </div>
    
      <div className="clients text-center">
        <p className="text-muted text-uppercase pb-4">Some of our trusted clients</p>
        <div className="client-logo">
          <div><img src="/assets/img/icon/go-sm-logo.svg" alt=""/></div>
          <div><img src="/assets/img/icon/social-road-logo.svg" alt=""/></div>
          <div><img src="/assets/img/icon/firmbee-logo.svg" alt=""/></div>
          <div><img src="/assets/img/icon/create-paper.svg" alt=""/></div>
          <div><img src="/assets/img/icon/point-design-logo.svg" alt=""/></div>
        </div>
      </div>

  
      <div id="variations" className="variations">
        <div className="first-variation">
          <div className="img">
            <img src="/assets/img/man.png" alt=""/>
          </div>
          <div className="text">
            <h1 className="variations-h1">There are many variations of passages of Lorem Ipsum available</h1>
            <p className="front-page">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
            <div className="buttons">
              <Link to="" className="btn-fill">Read More</Link>
            <Link to="" className="btn-outline">Start Today</Link>
            </div>
          </div>
        </div>
        <div className="second-variation">
          <div className="text">
            <h1 className="variations-h1">There are many variations of passages of Lorem Ipsum available</h1>
            <p className="front-page">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
            <div className="buttons">
              <Link to="" className="btn-fill">Read More</Link>
              <Link to="" className="btn-outline">Start Today</Link>
            </div>
          </div>
          <div className="img">
            <img src="/assets/img/woman.png" alt=""/>
            <img className = "square" src="/assets/img/icon/square.png" alt=""/>
          </div>
        </div>
      </div>

 
      <div className="service">
        <h1>Top Notch Service</h1>
        <p className="front-page">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="service-items">
          <div className="item">
            <img src="/assets/img/icon/code-icon.svg" alt=""/>
            <span className="counter">7 453 664</span>
            <span>Kilometers <br/>of code written</span>
          </div>
          <div className="item">
            <img src="/assets/img/icon/cofee-icon.svg" alt=""/>
            <span className="counter">43 657</span>
            <span>Coffees<br/>drunk</span>
          </div>
          <div className="item">
            <img src="/assets/img/icon/satisfied-client-icon.svg" alt=""/>
            <span className="counter">1 764</span>
            <span>Satisfied<br/>customers</span>
          </div>
          <div className="item">
            <img src="/assets/img/icon/realized-projects-icon.svg" alt=""/>
            <span className="counter">36 874</span>
            <span>Realized<br/>projects</span>
          </div>
        </div>
      </div>
 

      <div className="update-news">
        <div className="row">
          <div className="col-md-5 news-text">
            <h2>Get your update news</h2>
            <p>If you going to use a passage of Lotem Ipsum, you need to be sure there  isn’t anything embarrassing.</p>
          </div>
          <div className="col-md-7 news-form">
            <input type="email" name="email" placeholder="Enter your email" id=""/>
            <button type="submit">Send</button>
          </div>
        </div>
        </div>

   
      <div className="team text-center">
        <h1>Our Team</h1>
        <p className="front-page">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="team-person">
          <div className="person">
            <div className="photo"><img src="/assets/img/team-1.png" alt=""/></div>
            <span className="name">John Fox</span>
            <span>Marketing Manager</span>
          </div>
          <div className="person">
            <div className="photo"><img src="/assets/img/team-2.png" alt=""/></div>
            <span className="name">Kate Rose</span>
            <span>SEO</span>
          </div>
          <div className="person">
            <div className="photo"><img src="/assets/img/team-3.png" alt=""/></div>
            <span className="name">Anna Brown</span>
            <span>UI Expert</span>
          </div>
          <div className="person">
            <div className="photo"><img src="/assets/img/team-4.png" alt=""/></div>
            <span className="name">Mike Doe</span>
            <span>Web Developer</span>
          </div>
        </div>
      </div>

    </div>
  </main>
  <Footer></Footer>

  
</>


 

  )
}
