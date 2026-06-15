import { NavLink } from "react-router-dom";

import { logout } from "../utils/auth";

import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/");

  };

  return (

    <div

      className="bg-dark text-white p-3 d-flex flex-column"

      style={{
        width: "250px",
        minHeight: "100vh"
      }}

    >

      <h3 className="text-center mb-4">

        Loan Admin

      </h3>

      <hr />

      <NavLink

        to="/dashboard"

        className={({ isActive }) =>

          `btn mb-2 text-start ${
            isActive
              ? "btn-primary"
              : "btn-outline-light"
          }`

        }

      >

        Dashboard

      </NavLink>

      <div className="mt-auto">

        <button

          className="btn btn-danger w-100"

          onClick={handleLogout}

        >

          Logout

        </button>

      </div>

    </div>

  );

}

export default Sidebar;