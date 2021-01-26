import React from 'react'
import styled from 'styled-components'

const ImageComponent = styled.img`
    margin: 0;
    padding: 0;
`

const Image = ({src}) => {

    return (
        <ImageComponent src={src}/>
    )
}

export default Image
