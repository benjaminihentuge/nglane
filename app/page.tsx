// app/index.tsx
import React from 'react';
import Home from './components/Home'; // Adjust this import based on where your Home component is located
import '../styles/globals.css';

const IndexPage = () => {console.log("IndexPage Rendered");
  return (
    <div>
      <Home /> {/* Render your Home component here */}
    </div>
  );
};

export default IndexPage;
