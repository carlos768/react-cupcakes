import { NavLink } from "react-router-dom"

const Header = () =>{
return(
    <header>
        <nav className="d-flex flex-wrap justify-content-between align-items-center py-3 mx-5 mb-4">
      
      <a href="/" className="navbar-brand d-flex align-items-center">
        <img height="50px" src="https://cdn-icons-png.flaticon.com/512/174/174394.png" alt="logo"/>
        <span className="fs-4 ">React cupcakes</span>
      </a>

      <ul className="nav nav-pills">
            <li className="nav-item"><NavLink className="nav-link" to="/" exact>Inicio</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/cupcakes" exact>Cupcakes</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/nosotros" exact>Nosotros</NavLink></li>
      </ul>
         </nav>
    </header>
)
}

export default Header;