import useFetch from "../../hooks/useFetch"
import Cupcake from "../cards/Cupcake"


const Cupcakes = ({ peticion, filtro="", title }) => {
    const [cupcakes] = useFetch(peticion, filtro)
    console.log('datacupcakes:',cupcakes)
    return(
        <div className="">
            {title && <h1 className="ms-4">Página de cupcakes</h1>}
            {
                cupcakes ? (
                    <section className="cupcakes-container">
                    {
                        cupcakes.map(({id, descripcion, imagen, sabor, color, precio, vendido, numero}) => (
                            <Cupcake
                                key={id}
                                numero={numero}
                                imagen={imagen}
                                descripcion={descripcion}
                                sabor={sabor}
                                color={color}
                                precio={precio}
                                vendido={vendido}
                            />
                        ))
                    }
                </section>
                ) : (<span>Cargando...</span>)
            }
        </div>
    )
}

export default Cupcakes