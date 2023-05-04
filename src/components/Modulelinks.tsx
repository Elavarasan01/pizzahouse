import { Outlet, Link } from "react-router-dom";
import Navbarcomb from "./navbarcomb";

function Modulelinks() {
  return (
    <div className="row">
      <div className="col-12">
        <Navbarcomb />
      </div>
      {window.location.href === "http://localhost:3000/" ? (
        <div className="col-4 offset-4 mt-5">
          <Link to="/home" className="btn btn-secondary btn-lg text-warning">
            Click to Explore..
          </Link>
        </div>
      ) : null}

      <div className="col-12">
        <Outlet />
      </div>
    </div>
  );
}

export default Modulelinks;
