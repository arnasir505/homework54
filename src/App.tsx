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
      };
      items.push(cell);
    }

    const randomItem = items[Math.floor(Math.random() * items.length)];
    randomItem.hasItem = true;
    return items;
  };

  const [items, setItems] = useState(createItems());

  return (
    <div>
      <Field items={items} />
      <button onClick={() => console.log(items)}>log items</button>
    </div>
  );
}

export default App;
