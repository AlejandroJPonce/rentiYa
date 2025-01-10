import "../../../styles/baseComponents/Navigation/Navigator.scss";
import { useNavigate } from "react-router-dom";

export default function Navigator() {

  const navigate = useNavigate()

  const goSignin = () => {
    navigate("/sign-in")
  }

  const goPricing = () => {
    navigate("/pricing")
  }

  return (
    <>
      <div className="navigator-box">
        <div className="navigator-left-section">
          <div className="navigator-logo">
            <img
              className="navigator-logo-img"
              src="/src/assets/logo/Renti-logo.png"
              alt=""
            />
          </div>
          <div className="navigator-nav-routes">
            <nav>
              <ul>
                <li> Home </li>
                <li onClick={() => goPricing()}> Pricing </li>
                <li> Developing </li>
                <li> Bussines </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="navigator-right-section">
          <div className="navigator-buttons">
            <button className="sign-in-button" onClick={goSignin} >Ingresar</button>
            <button className="started-button" >Ver Catalogos</button>
          </div>
        </div>
      </div>
    </>
  );
}
