import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div >
  {/* For demo purpose */}
  <div className="container-fluid flex-grow-1 flex-shrink-0">
    <div className="px-lg-5">
      <div className="row py-5">
        <div className="col-lg-12 mx-auto text-white text-center">
          
          
          
          
        </div>
      </div>
    </div>
  </div>
  {/* End */}
  {/* Footer */}
  <footer className="bg-white">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width={180} className="mb-3" />
          <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          <ul className="list-inline mt-4">
            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter" /></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook" /></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram" /></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest" /></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo" /></a></li>
          </ul>
        </div>
        
        
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
          <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
          <div className="p-1 rounded border">
            <div className="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Copyrights */}
    <div className="bg-light py-4">
      <div className="container text-center">
        <p className="text-muted mb-0 py-2">© 2021 Ahmed & wajih All rights reserved.</p>
      </div>
    </div>
  </footer>
  {/* End */}
</div>

    )
}

export default Footer
