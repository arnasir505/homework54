import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Field from './components/Field';

function App() {
  const createItems = () => {
    let items = [];
    for (let i = 0; i < 36; i++) {
      const cell = {
        id: uuidv4(),
        hasItem: false,
        clicked: false,
        handleClick: () => console.log('cell')
      };
      items.push(cell);
    }

    const randomItem = items[Math.floor(Math.random() * items.length)];
    randomItem.hasItem = true;
    return items;
  };

  const [items, setItems] = useState(createItems());

  const foo = (id: any) => {
    const index = items.findIndex((item) => item.id === id);
    const itemsCopy = [...items];
    itemsCopy[index].clicked = true;
    setItems(itemsCopy)
  }

  return (
    <div>
      <Field items={items} handleClick={foo}/>
      <button onClick={() => console.log(items)}>log items</button>
    </div>
  );
}

export default App;
