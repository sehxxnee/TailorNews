import React from 'react';
import CommentGrid from '../grid/CommentGrid';

interface Comment {
  image: string;
  title: string;
  description: string;
  content: string;
}

interface CommentLayoutProps {
  comments: Comment[];
}

const CommentLayout: React.FC<CommentLayoutProps> = ({ comments }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {comments.map((comment, index) => (
        <div key={index} className="w-full max-w-screen-lg mx-auto">
          <CommentGrid
            image={comment.image}
            title={comment.title}
            description={comment.description}
            content={comment.content}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentLayout;