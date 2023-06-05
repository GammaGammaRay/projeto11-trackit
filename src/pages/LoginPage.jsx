import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../components/ContextProvider";
import { axiosLoginPost } from "../Axios";

import styled from "styled-components";
import trackitLogo from "../assets/trackit-logo.svg";

function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginAttempt, setLoginAttempt] = useState(false);
  const { user, setUser } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.values(user).length !== 0) {
      navigate("/hoje");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginAttempt(true);
    const userLoginData = {
      email: userEmail,
      password: userPassword,
    };

    function loginSuccess({ id, name, image, token }) {
      setUser((userState) => ({
        ...userState,
        id,
        name,
        image,
        token,
      }));
      const userStringify = JSON.stringify({ id, name, image, token });
      localStorage.setItem("UserData", userStringify);
      navigate("/hoje");
    }

    function loginFailure() {
      setLoginAttempt(false);
    }

    axiosLoginPost(userLoginData, loginSuccess, loginFailure);
  };

  return (
    <React.Fragment>
      <PageContainer>
        <div>
          <img src={trackitLogo} alt="trackit-logo" />
        </div>
        <FormDiv onSubmit={(e) => handleLogin(e)}>
          <form>
            <input
              type="email"
              placeholder="email"
              autoComplete="email"
              value={userEmail}
              disabled={loginAttempt}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            ></input>
            <input
              autoComplete="current-password"
              type="password"
              placeholder="senha"
              disabled={loginAttempt}
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            ></input>
            <button type="submit">Entrar</button>
          </form>
        </FormDiv>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </PageContainer>
    </React.Fragment>
  );
}

export default LoginPage;

const PageContainer = styled.div`
  margin-top: 20vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  button {
    width: 100%;
  }
`;
