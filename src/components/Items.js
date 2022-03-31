import React from 'react'
import './Alphabet.css'

function Items({ photo, name, underline }) {
    return (
        <div className='item'>
            <img src={`./img/${photo}`} alt='' />
            <span style={underline ? { textDecoration: 'underline' } : {}}>
                {name}
            </span>
        </div>
    )
}

export default Items