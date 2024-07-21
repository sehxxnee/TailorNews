import React from 'react';
import GridCell from './GridCell';
import MessageBox from './MessageBox';

const GridLayout: React.FC = () => {
  const gridItems = [
    { imageSrc: "https://via.placeholder.com/150", title: "Title 1", description: "Description" },
    { imageSrc: "https://via.placeholder.com/150", title: "Title 2", description: "Description" },
    { imageSrc: "https://via.placeholder.com/150", title: "Title 3", description: "Description" },
    { imageSrc: "https://via.placeholder.com/150", title: "Title 4", description: "Description" },
    { imageSrc: "https://via.placeholder.com/150", title: "Title 5", description: "Description" },
    { imageSrc: "https://via.placeholder.com/150", title: "Title 6", description: "Description" },
    { imageSrc: "https://via.placeholder.com/150", title: "Title 7", description: "Description" },
    { imageSrc: "https://via.placeholder.com/150", title: "Title 8", description: "Description" },
  ];

  return ( 
    <div className=" p-9 w-full min-h-screen"> 
      <div className="mb-4">
        <MessageBox 
          title="오늘의 맞춤 뉴스가 배달왔어요!" 
          highlightText="맞춤 뉴스" 
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {gridItems.map((item, index) => (
          <GridCell
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div> 
    </div>
  );
};

export default GridLayout;