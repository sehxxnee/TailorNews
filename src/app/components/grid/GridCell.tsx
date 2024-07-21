import React from 'react';

interface GridCellProps {
  imageSrc: string;
  title: string;
  description: string;
}

const GridCell: React.FC<GridCellProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-md">
      <img src={imageSrc} alt={title} className="w-full h-auto object-cover mb-2" />
      <h3 className="text-md font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default GridCell;