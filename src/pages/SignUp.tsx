import { useState } from "react";
import { doRegisterUser } from "../database/useFirebaseAuth";
import { useNavigate } from "react-router-dom";
import "../styles/loader.scss"

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const buttonClasses = !loading ? (
    <div>Registrar</div>
  ) : (
    <div className="loader"></div>
  );

  async function handleRegister() {
    try {
      setLoading(true);
      const response = await doRegisterUser(name, lastName, email, password);
      if (response) {
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="sign-in-main-box">
        <div className="sign-in-right-section">
          <div>
            <span className="form-title"> REGISTRO </span>
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Nombres"
            type="text"
          ></input>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input"
            placeholder="Apellidos"
            type="text"
          ></input>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Correo Electrónico"
            type="email"
          ></input>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Contraseña"
            type="password"
          ></input>
          <a href="/sign-in" className="form-route">
            Ir a iniciar sesion
          </a>
          <button className="login-button" onClick={handleRegister}>
            {buttonClasses}
          </button>
        </div>
        <div className="sign-in-left-section">
          <img src="/src/assets/logo/Renti-logo-nb.png" alt="" />
        </div>
      </div>
    </>
  );
}
