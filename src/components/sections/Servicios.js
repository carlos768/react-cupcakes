import useFetch from "../../hooks/useFetch"

const Servicios = ({ peticion, filtro }) =>{
    const [servicios, error] = useFetch(peticion, filtro)

    if(error){
        return <span>Hubo un error</span>
    }
    if(!servicios || servicios.length === 0){
        return <span>No hay servicios</span>
    }
    return (
        <div className="servicios">
            {
                servicios.map(s => (
                    <div key={s.id}>
                        <h2>{s.nombre}</h2>
                        <p>{s.descripcion}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Servicios