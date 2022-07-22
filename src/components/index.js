import React from 'react'
import { Container } from './MovieCard'

export default function Card({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}
