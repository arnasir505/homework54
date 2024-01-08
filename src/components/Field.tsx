import React, { useEffect } from 'react';
import Cell from './Cell';

type Item = {
  id: string;
  hasItem: boolean;
  isClicked: boolean;
};

interface FieldProps {
  items: Item[];
  openCell: (id: string) => void;
  gameEnded: boolean;
  endGame: () => void;
}

const Field: React.FC<FieldProps> = ({
  items,
  openCell,
  gameEnded,
  endGame,
}) => {
  useEffect(() => {
    checkGameEnded();
  }, [items]);

  const checkGameEnded = () => {
    const foxIsFound = items.find((item) => item.isClicked && item.hasItem);
    if (foxIsFound) {
      endGame();
    }
  };

  const cells = items.map((item) => (
    <Cell
      key={item.id}
      isClicked={item.isClicked}
      hasItem={item.hasItem}
      id={item.id}
      openCell={openCell}
    />
  ));

  return <div className={gameEnded ? 'field gameEnd' : 'field'}>{cells}</div>;
};

export default Field;
