import React from 'react';

type SpacerProps = {
  height?: number;
  width?: number;
};

const Spacer: React.FC<SpacerProps> = ({ height = 1, width = 1 }) => {

  const h = `${height * 8}px`;
  const w = `${width * 8}px`;

  return <div style={{ height: h, width: w }} />;
};

export default Spacer;