import React from 'react';

interface TriesProps {
  triesCount: number;
}

const Tries: React.FC<TriesProps> = ({ triesCount }) => {
  return <div className='tries'>Tries: {triesCount}</div>;
};

export default Tries;