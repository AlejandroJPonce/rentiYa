import "../styles/pages/SignIn.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doLoggedIn } from "../database/useFirebaseAuth";
import "../styles/loader.scss"


export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const buttonClasses = !loading ? (
    <div>Iniciar Sesión</div>
  ) : (
    <div className="loader"></div>
  );

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await doLoggedIn(email, password);
      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="sign-in-main-box">
        <div className="sign-in-left-section">
          <img src="/src/assets/logo/Renti-logo-nb.png" alt="" />
        </div>
        <div className="sign-in-right-section">
          <div>
            <span className="form-title"> INICIAR SESIÓN </span>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Email"
            type="email"
          ></input>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Password"
            type="password"
          ></input>
          <a href="/sign-up" className="form-route">
            Aun no haces parte del equipo ?
          </a>
          <button className="form-button" onClick={handleLogin}>
            {buttonClasses}
          </button>
        </div>
      </div>
    </>
  );
}
