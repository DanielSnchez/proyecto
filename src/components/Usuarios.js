import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from './Modal'
import Post from './Post'
import Album from './Album'


const Usuarios = ({
    first_name,
    last_name,
    avatar,
    email,
    estado2,
    cambiarEstado2,
    estado3,
    cambiarEstado3
}) => {

    const [app2, setApp2] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                const body = json
                //console.log(body)
                setApp2(body)
            })
    }, [])

    const [app3, setApp3] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                const images = json
                setApp3(images)
            })
    }, [])

    return (
        <UsuariosStyled>
            <Card>
                <img src={avatar} alt="" />
                <Details>
                    <h1>{first_name} {last_name}</h1>
                    <p>{email}</p>
                </Details>
                <ContenedorBoton>
                    <Boton onClick={() => cambiarEstado2(!estado2)}>Publicaciones</Boton>
                    <Boton onClick={() => cambiarEstado3(!estado3)}>Album</Boton>
                </ContenedorBoton>
            </Card>


            <Modal
                estado={estado2}
                cambiarEstado={cambiarEstado2}
                titulo={null}
                mostrarHeader={false}
                mostrarOverlay={true}
                mostrarBotonCerrar={true}
                overlayLogin={false}
            >
                <TituloPost>
                    <h1>Posts</h1>
                </TituloPost>
                <Contenido>
                    {
                        app2.map(person =>
                            <Post key={person.id} body={person.body} />
                        )
                    }
                </Contenido>
            </Modal>



            <Modal
                estado={estado3}
                cambiarEstado={cambiarEstado3}
                titulo={null}
                mostrarHeader={false}
                mostrarOverlay={true}
                mostrarBotonCerrar={true}
                overlayLogin={false}
            >
                <TituloPost>
                    <h1>Album</h1>
                </TituloPost>
                <Contenido>
                    {
                        app3.map(album =>
                            <Album key={album.id} url={album.url} />
                        )
                    }
                </Contenido>
            </Modal>




        </UsuariosStyled>
    )
}

export default Usuarios











const UsuariosStyled = styled.div`
    width: 264px;
    text-align: center;
    flex-wrap: wrap;
    border-radius: 5px;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-radius: 800px;
        border: 1px solid black;
    }

`

const Card = styled.div`
    padding: 1.5em;
    justify-content: center;
    align-items: center;
`

const Details = styled.div`
    padding: 1.5em;
`
const ContenedorBoton = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
    background: #fafafa;
`;


const Boton = styled.button`
	display: block;
	padding: 10px 18px;
	border-radius: 15px;
	color: #fff;
	border: none;
	background: #006723;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #006723;
	}
`;


const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    height: 80vh;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;


const TituloPost = styled.div`
    color: black;
    font: initial;

`;


