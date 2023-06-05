import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { axiosRegisterNewUser } from "../Axios";
import { RegisterPageContainer } from "../style/PagesStyle";
import trackitLogo from "../assets/trackit-logo.svg"; //tem algum jeito mais eficiente de importar imagens?

function PageRegister() {
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUserProfileImage, setNewUserProfileImage] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [attemptingRegistry, setAttemptingRegistry] = useState(false);

  const navigate = useNavigate();

  const handleRegisterUser = (e) => {
    e.preventDefault();
    setAttemptingRegistry(true);

    const newUserData = {
      email: newUserEmail,
      name: newUserName,
      image: newUserProfileImage,
      password: newUserPassword,
    };

    function registerSuccess() {
      navigate("/");
    }

    function registerSuccess() {
      setAttemptingRegistry(false);
    }

    axiosRegisterNewUser(newUserData, registerSuccess, registerFailure);
  };

  return (
    <React.Fragment>
      <RegisterPageContainer>
        <div className="formDiv">
          <div>
            <img src={trackitLogo} alt="trackit-logo" />
          </div>
          <form onSubmit={handleRegisterUser}>
            <input
              value={newUserEmail}
              placeholder="email"
              type="email"
              required
              disabled={attemptingRegistry}
              onChange={(e) => setNewUserEmail(e.target.value)}
            ></input>
            <input
              value={newUserPassword}
              placeholder="senha"
              required
              type="password"
              disabled={attemptingRegistry}
              onChange={(e) => setNewUserPassword(e.target.value)}
            />
            <input
              value={newUserName}
              placeholder="nome"
              type="text"
              required
              disabled={attemptingRegistry}
              onChange={(e) => setNewUserName(e.target.value)}
            ></input>
            <input
              value={newUserProfileImage}
              placeholder="foto"
              type="url"
              required
              disabled={attemptingRegistry}
              onChange={(e) => setNewUserProfileImage(e.target.value)}
            ></input>
            <Link to={`/`}>
              <button>Cadastrar</button>
            </Link>
          </form>
        </div>
        <Link to={`/`}>Já tem uma conta? Faça login!</Link>
      </RegisterPageContainer>
    </React.Fragment>
  );
}

export default PageRegister;


