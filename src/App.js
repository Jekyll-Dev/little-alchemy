import { useState } from 'react';
import './App.css';
import Screenwork from './components/Element/Screenwork';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [list, setList] = useState([]);
  const [icons, setIcons] = useState(['air', 'earth', 'fire', 'water']);
  return (
    <div className="App" >
      <Screenwork list={list} setList={setList} setIcons={setIcons} />
      <Sidebar icons={icons} setIcons={setIcons} setList={setList} />
    </div>
  );
}

export default App;
