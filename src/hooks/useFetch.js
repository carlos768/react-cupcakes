import { useEffect, useState } from "react"
import { get } from "axios"

const useFetch = (endpoint, filtro) => {
    const [ data, setData ] = useState()
    const [ error, setError ] = useState()

    useEffect(() =>{
        get(`${process.env.REACT_APP_URL_API}${endpoint}.json${filtro}`)
            .then(({ data }) => {
                if (Array.isArray(data)){
                    setData(data)
                } else {
                    const objectToArray = Object.values(data);
                    setData(objectToArray);
                }
            })
            .catch(err => setError(err))
    }, [endpoint, filtro])

    return [data, error];
}

export default useFetch