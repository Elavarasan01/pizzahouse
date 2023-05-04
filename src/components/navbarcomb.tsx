import { Link } from "react-router-dom";

function navbarcomb() {
  return (
    <div className="bg-danger text-white p-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">
            <Link to="/home" className="text-white fw-bold">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/about" className="text-white fw-bold">
              About
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/services" className="text-white fw-bold">
              Services
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/menu" className="text-white fw-bold">
              Menu
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default navbarcomb;
