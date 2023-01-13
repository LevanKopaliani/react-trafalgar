import "../styles/Footer.css";
import Logo from "../img/footerlogo.png";
import LogoImg from "../img/footerlogoimg.png";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="credentials">
          <div className="credentials-logo">
            <span>
              <img src={Logo} alt="logo" />
            </span>
            <img src={LogoImg} alt="logoImg" />
          </div>
          <p className="credentials-info">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <div className="cedentials-rights">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </div>
        </div>
        <div className="footer-links">
          <ul className="company">
            <li>Company</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>Find a doctor</li>
            <li>Apps</li>
          </ul>
          <ul className="region">
            <li>Region</li>
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>HongKong</li>
            <li>Canada</li>
          </ul>
          <ul className="help">
            <li>help</li>
            <li>Help Center</li>
            <li>Contact Support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
