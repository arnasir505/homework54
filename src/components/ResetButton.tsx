import React from 'react';

interface ResetButtonProps {
  resetField: () => void;
  resetTries: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({
  resetField,
  resetTries,
}) => {
  return (
    <button
      onClick={() => {
        resetField();
        resetTries();
      }}
    >
      Reset
    </button>
  );
};

export default ResetButton;
