import React from 'react';
import Cell from './Cell';

type Item = {
  id: string;
  hasItem: boolean;
  clicked: boolean;
};

interface FieldProps {
  items: Item[];
  handleClick: (id: string) => void;
}

const Field: React.FC<FieldProps> = ({ items, handleClick }) => {
  const cells = items.map((item) => (
    <Cell
      key={item.id}
      isClicked={item.clicked}
      hasItem={item.hasItem}
      id={item.id}
      openCell={handleClick}
    />
  ));
  return <div className='field'>{cells}</div>;
};

export default Field;
