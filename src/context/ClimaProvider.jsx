import { useEffect, useState } from "react";

const ClimaContext = createContext()
const ClimaProvider = ({ children }) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <ClimaContext.Provider
            value={{busqueda, datosBusqueda}}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext