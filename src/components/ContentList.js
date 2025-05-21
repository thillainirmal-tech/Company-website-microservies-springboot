import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContentList = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/content-service/api/contents')  // Gateway URL
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching content:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Content List</h2>
      <ul className="space-y-2">
        {content.map(item => (
          <li key={item.id} className="p-2 border rounded">
            <strong>{item.title}</strong><br />
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
