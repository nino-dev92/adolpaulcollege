import "../Styles/Footer/footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-div-one">
        {" "}
        <div className="info-div">
          <div>
            <h3>Adol Paul College of health and Technology</h3>
            <p>
              Empowering healthcare professionals with world-class education and
              training in health technology since our establishment.
            </p>
          </div>
          <div className="info-div-links">
            <a href="mailto:info@adolpaulcollege.edu.ng" target="_blank">
              <MdOutlineMailOutline style={{ color: "white" }} size="30" />
            </a>
            <a href="https://x.com/Adolpaulcoht?s=09" target="_blank">
              <FaSquareXTwitter style={{ color: "black" }} size="30" />
            </a>
            <a
              href="https://www.instagram.com/adolpaulcoht?utm_source=qr&igsh=MzQ0YTJ6d2hnMXZ3"
              target="_blank"
            >
              <FaInstagram style={{ color: "red" }} size="30" />
            </a>
          </div>
        </div>
        <div className="quick-links">
          <div>
            <h3>Quick Links</h3>
          </div>
          <div className="quick-links-link">
            <a href="/#about">About Us</a>
            <a href="/programs">Academic Programs</a>
            <a href="/facilities">Facilities</a>
            <a href="/admissions">Admissions</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="programs-div">
          <div>
            <h3>Programs</h3>
          </div>
          <div className="programs-div-links">
            <a href="/programs">Community Health (CHEW)</a>
            <a href="/programs">Community Health Officer</a>
            <a href="/programs">Health Information Management</a>
            <a href="/programs">Environmental Health</a>
            <a href="/programs">Medical Laboratory Tech</a>
            <a href="/programs">Pharmacy Technology</a>
          </div>
        </div>
        <div className="contact-div">
          <div>
            <h3>Contact Us</h3>
          </div>
          <div className="contact-info">
            <p>
              <FaLocationDot style={{ marginRight: "4px" }} />
              Adol Paul College of Health Technology Utuh, Nigeria.
            </p>
            <p>
              <BsFillTelephoneFill /> 08033019121
            </p>
            <p>
              <MdOutlineMailOutline /> info@adolpaulcollege.edu.ng
            </p>
          </div>
        </div>
      </div>
      <div className="footer-div-two">
        <div>
          <p>
            copyright &copy; {year} Adol Paul College of Health Technology. All
            rights reserved.
          </p>
        </div>
        <div className="second-div-p">
          <p>Terms of Service</p>
          <p>Student HandBook</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
