
import {Link} from 'react-router-dom'
  const Navbar = ({panier}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">MyShop</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link " to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Products" >Products</Link>
            </li>
          </ul>
          <div className="icons position-relative">
            <Link to="Panier" style={{ textDecoration: "none" }}>
              <i className="bi bi-bag" ></i>
              {panier.length > 0 && (
                <span className="position-absolute top-0 translate-middle text-danger">{panier.length}</span>
              )}
            </Link>
</div>

        </div>
      </div>
    </nav>
  );
};
export default Navbar;




