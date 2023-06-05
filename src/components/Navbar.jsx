import React from "react";
import { NavbarContainer, DropdownMenu } from "../style/style_Navbar";
import trackitLogoType from "../assets/trackit-logotype.svg";
import { useUserContext } from "./ContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const {
    user: { image, name },
    setUser,
  } = useUserContext();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setUser({});
    navigate("/")
  };


  return (
    <React.Fragment>
      <NavbarContainer>
        <img src={trackitLogoType} alt="trackitLogotype" />
        <div className="navbarRightDiv">
          {name}
          <img
            onClick={toggleDropdown}
            crossOrigin="anonymous"
            src={image}
            alt="profileImg"
          />
          {showDropdown && (
            <DropdownMenu>
              <button onClick={handleLogout}>Logout</button>
            </DropdownMenu>
          )}
        </div>
      </NavbarContainer>
    </React.Fragment>
  );
}

export default Navbar;
