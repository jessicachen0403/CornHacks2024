import {Link} from "react-router-dom";

const Footer = () => {
    return (
      <div className="footer">
          <div className="footer-about">
              <Link to="/about">About Us</Link>
          </div>
          <p>CornHacks 2024</p>
      </div>
    );
}

export default Footer;