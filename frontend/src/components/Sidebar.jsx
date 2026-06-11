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
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >

      <h4>Loan Admin</h4>

      <hr />

      <p>Dashboard</p>

      <button
        className="btn btn-danger"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;