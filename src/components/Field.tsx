import React from 'react';
import Cell from './Cell';

type Item = {
  id: string;
  hasItem: boolean;
  clicked: boolean;
};

interface FieldProps {
  items: Item[];
  openCell: (id: string) => void;
}

const Field: React.FC<FieldProps> = ({ items, openCell }) => {
  const cells = items.map((item) => (
    <Cell
      key={item.id}
      isClicked={item.clicked}
      hasItem={item.hasItem}
      id={item.id}
      openCell={openCell}
    />
  ));
  return <div className='field'>{cells}</div>;
};

export default Field;
