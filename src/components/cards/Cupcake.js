import { useState } from "react"
import { number, string } from "prop-types"
import { patch } from "axios"

const Cupcake = ({ descripcion, imagen, sabor, color, precio, vendido, numero }) =>{
    const [sold, setSold] = useState(false);
    const vender = () => {
        setSold(true)
        patch(`${process.env.REACT_APP_URL_API}cupcakes/${numero}.json`, {vendido: true})
            .then(response => console.log(response))
    };
    
    return(
        <div className="cupcake">
            <div className="cupcake-img-container">
            <img src={ imagen } alt={ sabor } className={`${vendido || sold ? "img-vendido" : undefined} `} />
            </div>
            <h2 className="descripcion">{descripcion}</h2>
            <p>Sabor: { sabor }</p>
            <p>Color: { color }</p>
            <p>Precio: { precio }</p>
            <b>Stock:</b> {!vendido && !sold ? <p className="disponible">Disponible</p> : <p className="no-disponible">No disponible</p>}
            {!vendido && !sold && <button id="btn-vender" className="btn btn-primary" onClick={vender}>Comprar</button>}

        </div>
    )
}

Cupcake.propTypes = {
    precio: number,
    color: string.isRequired,
    sabor: string.isRequired,
    descripcion: string.isRequired,
    imagen: string
}

Cupcake.defaultProps = {
    imagen: "https://t2.uc.ltmcdn.com/images/3/9/6/img_como_hacer_cupcakes_glaseados_6693_600_square.jpg",
    precio: 0
}

export default Cupcake;