import React, { useState, useEffect } from 'react'
import '../style.css'
import { alphabet } from './Alphabet'
import { Library } from '../../Library/Library'
import Items from '../Element/Items'

function Sidebar({ icons, setIcons, setBoard }) {

  const [renderIcons, setRenderIcons] = useState([]);

  useEffect(() => {
    setRenderIcons(Library.filter(icon => icons.includes(icon.name)));
  }, [icons]);

  return (
    <div className='sidebar'>
      <ul className='alphabet'>
        {alphabet.map((alphabet, index) => (
          <li key={index} className='list'>
            {alphabet}
          </li>
        ))}
      </ul>

      <ul className='library-icon'>
        {renderIcons.map((icon, index) => (
          <li key={icon.id}>
            <div className='icon-img'>
              <Items right={true} iconId={index + 1} url={icon.images} iconItem={icon} setIcons={setIcons} setBoard={setBoard} />
            </div>
            <span className='name'>{icon.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar