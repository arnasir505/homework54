import React from 'react';

interface CellProps {
  id: string;
  isClicked: boolean;
  hasItem: boolean;
  openCell: (id: string) => void;
}

const Cell: React.FC<CellProps> = ({ id, isClicked, hasItem, openCell }) => {
  return (
    <div
      className={isClicked ? 'cell open' : 'cell'}
      onClick={() => openCell(id)}
    ></div>
  );
};

export default Cell;
