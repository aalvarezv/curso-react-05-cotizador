import React from 'react'
import {primeraLetraMayuscula} from '../helpers'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFFFFF;
    margin-top: 1rem;
`

const Resumen = ({datos}) => {

    const {marca, anio, plan} = datos
    //No llega al return del renderizado al devolver null
    if (marca === '' || anio === '' || plan === '')
    return null

    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primeraLetraMayuscula(marca)}</li>
                <li>Año: {anio}</li>
                <li>Plan: {primeraLetraMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>

     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;