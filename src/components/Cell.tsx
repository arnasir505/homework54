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
      onClick={isClicked ? () => {} : () => openCell(id)}
    >
      {hasItem ? <span className='ring'>🦊</span> : null}
    </div>
  );
};

export default Cell;
