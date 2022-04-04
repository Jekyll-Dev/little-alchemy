import { useState } from 'react';
import './App.css';
import Screenwork from './components/Element/Screenwork';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [board, setBoard] = useState([]);
  const [icons, setIcons] = useState(['air', 'earth', 'fire', 'water']);
  return (
    <div className="App" >
      <Screenwork board={board} setBoard={setBoard} setIcons={setIcons} />
      <Sidebar icons={icons} setIcons={setIcons} setBoard={setBoard} />
    </div>
  );
}

export default App;
