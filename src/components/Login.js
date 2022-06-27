import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components";



const Login = ({
    estado,
    cambiarEstado,
    register,
    handleSubmit,
    onSubmit,
    errors,
}) => {

    //email="eve.holt@reqres.in"
    //contraseña="cityslicka"
    const [miLogin, setMiLogin] = useState("false")
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    function iniciarSesion(e) {
        e.preventDefault();
        var txtUsuario = document.getElementById("txtUsuario").value;
        var txtPassword = document.getElementById("txtPassword").value;
        if (txtUsuario.lenght === 0 || txtPassword.lenght === 0) {
            alert("Complete los datos")
        } else {
            if (txtUsuario === "eve.holt@reqres.in" && txtPassword === "cityslicka") {
                setMiLogin("true")
                document.getElementById("form_login").style.display = "none";
            } else {
                setMiLogin("false")
                alert("Error de email y/o contraseña")
                document.getElementById("txtUsuario").value = ""
                document.getElementById("txtPassword").value = ""
                document.getElementById("txtUsuario").focus()
            }
        }
    }	
	
	
    return (
        <>
            <ContenedorBotones>
                <form id="form_login" onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <h1 align="center" color="#000" font="serif">Log in</h1>
                        <div>
                            <Input id="txtUsuario" type="text" onChange={(e) => setUsuario(e.target.value)} placeholder="alguien@ejemplo.com*" {...register("email", {
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                            })} />
                            {errors.email?.type === 'required' && <Fail>El email es requerido</Fail>}
                            {errors.email?.type === 'pattern' && <Fail>El email no es correcto</Fail>}
                        </div>
                        <div>
                            <Input id="txtPassword" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña*" {...register("contraseña", {
                                required: true,
                                minLength: 1,
                                maxLength: 20
                            })} />
                            {errors.contraseña?.type === 'required' && <Fail>La contraseña es requerida</Fail>}
                            {errors.contraseña?.type === 'minLength' && <Fail>La contraseña debe ser mayor a 1 caracter</Fail>}
                            {errors.contraseña?.type === 'maxLength' && <Fail>La contraseña no debe ser mayor a 20 caracteres</Fail>}
                        </div>
                        <Button primary name="enviar_formulario" type="submit" onClick={iniciarSesion} value="Login">Log on</Button>
                    </div>
                </form>
		{miLogin === "true" &&
                    <>
                        <Contenido>
                            <P>Iniciaste sesión satisfactoriamente!</P>
                            <Boton onClick={() => cambiarEstado(!estado)}>Aceptar</Boton>
                        </Contenido>
                    </>
                }
            </ContenedorBotones>
        </>
    )
}

export default Login


			     
			     
			     
			     
			     
			     
			     
const Input = styled.input`
  display: block;
  border-radius: 5px;
  border: 2px solid #20993f;
  color: #7e7f91;
  padding: 0.25em 1em;
  margin: 0.5em auto;
  text-align: left;
  height: 3em;
  box-sizing: border-box;
  font-weight: 500;
  background-color: #f0f0f0;
  font-size: 16px;
  width: 100%;

  ${props => props.primary && css`
    background: #20993f;
    color: black;
    text-align: center;
    font-size: medium;
    font-weight: bold;
  `}
`;

			     
const Button = Input.withComponent('button')


const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Fail = styled.small`
    font-size: normal;
    color: red;
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

const Contenido = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const P = styled.div`
    text-align: center;
    font-family: revert;
    font-size: 22px;
`;
