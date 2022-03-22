import Servicios from "../sections/Servicios"
import Cupcake from "./cupcake"
import { NavLink } from "react-router-dom"

const query = '?orderBy="id"&startAt=3&endAt=6'

const Home = () =>{
    return(
        <>
<div className="main-banner">
    <div className="main-banner__info">
      <h1 className="">Bienvenido</h1>
      <p className="">Página de cupcakes con React.</p>
      <div className="banner-btn">
      <NavLink className="btn btn-danger" to="/cupcakes" exact>Ver Cupcakes</NavLink>
      </div>
    </div>
  </div>
            <Cupcake peticion="cupcakes" filtro={query}/>
            <Servicios peticion="servicios" filtro="?"/>
        </>
    )
}

export default Home