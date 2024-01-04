import React from 'react';
import Cell from './Cell';

type Item = {
  id: string;
  hasItem: boolean;
  clicked: boolean;
};

interface FieldProps {
  items: Item[];
}

const Field: React.FC<FieldProps> = ({ items }) => {
  const cells = items.map((item) => <Cell key={item.id} />);
  return <div className='field'>{cells}</div>;
};

export default Field;
