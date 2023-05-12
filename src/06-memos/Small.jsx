import PropTypes from 'prop-types';
import React from 'react'

export const Small = React.memo(
  function Small({ value }) {

    console.log('Me volví a dibujar :c')

    return (
      <small>{value}</small>
    )
})


Small.propTypes = {
  value: PropTypes.number.isRequired,
}