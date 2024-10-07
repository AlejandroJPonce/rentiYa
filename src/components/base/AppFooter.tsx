import "../../styles/baseComponents/AppFooter.scss";
import instagram from "../../assets/social-icon/instagram.svg";
import facebook from "../../assets/social-icon/facebook.svg";
import twitter from "../../assets/social-icon/twitter.svg";
import github from "../../assets/social-icon/github.svg";

export default function AppFooter() {
  return (
    <>
      <div className="footer-main-box">
        <div className="footer-top-section">
          <img
            className="footer-top-section-icon"
            src="/src/assets/logo/Renti-logo-nb.png"
            alt=""
          />
          <div className="footer-top-section-text">
            <span>
              Get started to up your business with personal AI manager
            </span>
          </div>
          <div className="footer-top-section-input">
            <input
              className="form-input-footer"
              placeholder="Email"
              type="email"
            ></input>
            <button className="footer-input-button">Get started</button>
          </div>
        </div>

        <div className="footer-bottom-section">
          <nav>
            <ul>
              <li> Home </li>
              <li> Prices </li>
              <li> Developing </li>
              <li> sections </li>
              <li> Quienes somos ? </li>
              <li> Contactanos </li>
              <li> Productos </li>
            </ul>
          </nav>
        </div>

        <div className="footer-main-links">
          <div className="footer-main-links-instagram">
            <img src={instagram} alt="" />
          </div>
          <div className="footer-main-links-facebook">
            <img src={facebook} alt="" />
          </div>
          <div className="footer-main-links-twitter">
            <img src={twitter} alt="" />
          </div>
          <div className="footer-main-links-github">
            <img src={github} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
