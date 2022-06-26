import React, { useEffect } from "react"
import styled, { css } from "styled-components";



const Login = ({
    register,
    handleSubmit,
    onSubmit,
    errors,
    //email,
    //contraseña
}) => {

    return (
        <>
            <ContenedorBotones>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <h1 align="center" color="#000" font="serif">Log in</h1>
                        <div>
                            <Input type="text" placeholder="alguien@ejemplo.com*" {...register("email", {
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                            })} />
                            {errors.email?.type === 'required' && <Fail>El email es requerido</Fail>}
                            {errors.email?.type === 'pattern' && <Fail>El email no es correcto</Fail>}
                        </div>
                        <div>
                            <Input type="password" placeholder="Contraseña*" {...register("contraseña", {
                                required: true,
                                minLength: 8,
                                maxLength: 20
                            })} />{/*DANIEL</Input>*/}
                            {errors.contraseña?.type === 'required' && <Fail>La contraseña es requerida</Fail>}
                            {errors.contraseña?.type === 'minLength' && <Fail>La contraseña debe ser mayor a 8 caracteres</Fail>}
                            {errors.contraseña?.type === 'maxLength' && <Fail>La contraseña no debe ser mayor a 20 caracteres</Fail>}
                        </div>
                        <Button primary name="enviar_formulario" value="value">Log on</Button>
                    </div>
                </form>
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