import './App.css';
import Screenwork from './components/Screenwork';
import Sidebar from './components/Sidebar';

const ingredient = [
  {
    id: 1,
    name: 'air',
    photo: 'air.png'
  },
  {
    id: 2,
    name: 'dust',
    photo: 'dust.png'
  },
  {
    id: 3,
    name: 'earth',
    photo: 'earth.png'
  },
  {
    id: 4,
    name: 'fire',
    photo: 'fire.png'
  },
  {
    id: 5,
    name: 'geyser',
    photo: 'geyser.png'
  },
  {
    id: 6,
    name: 'obsidian',
    photo: 'obsidian.png'
  },
  {
    id: 7,
    name: 'steam',
    photo: 'steam.png'
  },
  {
    id: 8,
    name: 'lava',
    photo: 'lava.png'
  },
  {
    id: 9,
    name: 'water',
    photo: 'water.png'
  }
]
function App() {
  return (
    <div className="App" >
      <Screenwork />
      <Sidebar ingredient={ingredient} />
    </div>
  );
}

export default App;
