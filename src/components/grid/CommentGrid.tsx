 
import React from 'react';

interface CommentGridProps {
  image: string;
  title: string;
  description: string;
  content: string;
}

const CommentGrid: React.FC<CommentGridProps> = ({ image, title, description, content }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex w-full">
      <div className="w-1/2">
        <img src={image} alt="comment image" className="w-full h-full object-cover rounded-l-lg" />
      </div>
      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div className="text-black text-xl font-bold">{title}</div>
        <div className="text-gray-600 text-sm">{description}</div>
        <div className="text-black text-base">{content}</div>
      </div>
    </div>
  );
};

export default CommentGrid;