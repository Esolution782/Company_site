import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
 
    <footer>
    <div className="container text-center text-md-start py-5">
      <div className="footer-wrap">
        <div className="about">
          <img src="/assets/img/icon/logo.svg" alt="" />
          <p className="text-muted py-4">
           s Start working with Firmbee which can provide you with all the tools needed to run an effcieint business remotely.
          </p>
          <div className="social-media">
            <Link to="" className="me-2 text-reset"><img src="/assets/img/icon/social-media-01.svg" alt="" /></Link>
            <Link to="" className="me-2 text-reset"><img src="/assets/img/icon/social-media-02.svg" alt="" /></Link>
            <Link to="" className="me-2 text-reset"><img src="/assets/img/icon/social-media-03.svg" alt="" /></Link>
            <Link to="" className="me-2 text-reset"><img src="/assets/img/icon/social-media-04.svg" alt="" /></Link>
          </div>
        </div>

        <div className="company">
          <h6 className="fw-bold">Company</h6>
          <p><Link to="">About us</Link></p>
          <p><Link to="">Services</Link></p>
          <p><Link to="">Team</Link></p>
          <p><Link to="">Pricing</Link></p>
          <p><Link to="">Project</Link></p>
          <p><Link to="">Careers</Link></p>
          <p><Link to="">Blog</Link></p>
          <p><Link to="">Login</Link></p>
        </div>
        
        <div className="useful-links">
          <h6 className="fw-bold">Useful links</h6>
          <p><Link to="">Terms of </Link></p>
          <p><Link to="">Services</Link></p>
          <p><Link to="">Privacy Policy</Link></p>
          <p><Link to="">Documentation</Link></p>
          <p><Link to="">Changelog</Link></p>
          <p><Link to="">Components</Link></p>
        </div>

        <div className="newsletter">
          <h6 className="fw-bold">Newsletter</h6>
          <p className="text-muted">Sign up and receive the latest tips
            via email.</p>
            <form id="subscribe" action="">
              <label htmlFor="email">Youre e-mail:</label>
              <input type="email" placeholder="e-mail:" name="email" required />
              <button type="submit" className="btn-fill">Subscribe</button>
            </form>
        </div>
        
      </div>
      <div className="copyright">
        <p>&copy; 2022 YOUR-DOMAIN | Created by <Link to="https://firmbee.com/solutions/free-invoicing-app-billing-software/" title="Firmbee - Free Invoicing App">Firmbee.com</Link></p>

      </div>
    </div>
  
</footer>
  )
}
