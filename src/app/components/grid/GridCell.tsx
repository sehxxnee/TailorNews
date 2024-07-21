import React from 'react';

interface GridCellProps {
  imageSrc: string;
  title: string;
  description: string;
}

const GridCell: React.FC<GridCellProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-md flex flex-col h-full">
      <div className="relative mb-2" style={{ height: '60%' }}>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="text-md font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default GridCell;