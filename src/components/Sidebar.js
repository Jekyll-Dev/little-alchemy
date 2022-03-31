import React from 'react'
import './Alphabet.css'
import Alphabet from './Alphabet'
import Items from './Items'

function Sidebar({ ingredient }) {
  return (
    <div className='sidebar-container'
      style={{ backgroundImage: `url('./img/library-bg.png')` }}
    >
      <Alphabet />
      <div>
        {ingredient.map(item => {
          return <Items key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default Sidebar