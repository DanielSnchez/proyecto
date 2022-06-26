import React from "react";
import styled, { css } from "styled-components";


const Album = ({
    url
}) => {

    return (
        <>
            <PostStyled>
                <CardAlbum>
                    <DetailsAlbum>
                        <P titulo>Photo</P>
                        <img src={url} />
                    </DetailsAlbum>
                </CardAlbum>
            </PostStyled>
        </>
    )
}

export default Album











const PostStyled = styled.div`
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
    }

`

const CardAlbum = styled.div`
    padding: inherit;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
`

const DetailsAlbum = styled.div`
    padding: 1.5em;
`

const P = styled.div`
    font-size: 10px;
    text-align: initial;
    font-style: italic;

    ${props => props.titulo && css`
    color: black;
    font: icon;
    display: inline-table;
    padding: 0px 9px;
    text-align: center;
    font-size: medium;
    font-weight: bold;
  `}
`
