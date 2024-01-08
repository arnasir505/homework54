import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Field from './components/Field';
import Tries from './components/Tries';
import ResetButton from './components/ResetButton';

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
  const [triesCount, setTriesCount] = useState(0);

  const openCell = (id: any) => {
    const index = items.findIndex((item) => item.id === id);
    const itemsCopy = [...items];
    itemsCopy[index].clicked = true;
    setItems(itemsCopy);
    setTriesCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <Field items={items} openCell={openCell} />
      <Tries triesCount={triesCount} />
      <ResetButton
        resetField={() => setItems(createItems)}
        resetTries={() => setTriesCount(0)}
      />
    </div>
  );
}

export default App;
