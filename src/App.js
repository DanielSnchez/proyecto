import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Provider } from 'react-redux'

//Importar componentes
import Modal from './components/Modal'
import Login from './components/Login'
import PaginaInicial from './components/PaginaInicial'




export default function App() {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  //Login
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (evento) => console.log(evento);
  //console.log(errors); //Mostrar en consola lo que está mal

  //Estado Posts
  const [estadoModal2, cambiarEstadoModal2] = useState(false);

  //Estado Album de fotos
  const [estadoModal3, cambiarEstadoModal3] = useState(false);


  return (
    <>
      <ContenedorBoton>
        <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Log in</Boton>
      </ContenedorBoton>
      <>
        <>
          <PaginaInicial
            estado2={estadoModal2}
            cambiarEstado2={cambiarEstadoModal2}
            estado3={estadoModal3}
            cambiarEstado3={cambiarEstadoModal3}
          />
        </>
        <Modal
          estado={estadoModal1}
          cambiarEstado={cambiarEstadoModal1}
          titulo={null}
          mostrarHeader={false}
          mostrarOverlay={true}
        >

          <Contenido>
            <Login
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              errors={errors}
            //email="eve.holt@reqres.in"
            //contraseña="cityslicka"
            >

            </Login>
          </Contenido>
        </Modal>
      </>
    </>
  );
}












const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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


const ContenedorBoton = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: right;
	gap: 20px;
`;


const Boton = styled.button`
	display: block;
	padding: 10px 18px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

