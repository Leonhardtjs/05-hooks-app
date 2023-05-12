import PropTypes from 'prop-types'
import React from 'react'
export const Hijo = React.memo(
    function Hijo({incrementar, numero}) {
        console.log('  Me volví a generar :(  ');

        return (
            <button
                className="btn btn-primary mr-3"
                onClick={() => incrementar(numero)}
            >
                {numero}
            </button>
        )
    }
)  

    
Hijo.propTypes = {
    numero: PropTypes.number.isRequired,
    incrementar: PropTypes.func.isRequired
}