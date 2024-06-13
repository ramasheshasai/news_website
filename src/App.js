import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Newsboard from './components/newsboard';

const App = () => {
  const [category, setCategory] = useState("general");
  
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}> {/* Background color for the entire page */}
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
}

export default App;