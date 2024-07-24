import React from 'react';

interface MessageBoxProps {
  title: string;
  highlightText: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ title, highlightText }) => {
  return (
    <div className="p-1">
      <p className="text-gray-700">
        {title.split(highlightText).map((part, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-blue-600 font-semibold">{highlightText}</span>}
            {part}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default MessageBox;