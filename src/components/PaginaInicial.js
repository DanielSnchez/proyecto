import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Usuarios from "./Usuarios";



const PaginaInicial = ({
    estado2, 
    cambiarEstado2,
    estado3,
    cambiarEstado3
    }) => {
    const [app, setApp] = useState([])

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(response => {
                const { data } = response
                setApp(data)
            })
    }, [])


    return (
        <PaginaInicialStyled>
            <Titulo><h1>Inicio</h1></Titulo>
            {
                app.map(person =>
                    <Usuarios
                        key={person.id}
                        first_name={person.first_name}
                        avatar={person.avatar}
                        last_name={person.last_name}
                        email={person.email}
                        estado2={estado2}
                        cambiarEstado2={cambiarEstado2}
                        estado3={estado3}
                        cambiarEstado3={cambiarEstado3}
                    />)
            }
        </PaginaInicialStyled>
    )
}

export default PaginaInicial










const PaginaInicialStyled = styled.div`
    display: grid;
    background: #fafafa;
    justify-content: center;
`

const Titulo = styled.div`
    display: flex;
    background: #fafafa;
    justify-content: center;
`
