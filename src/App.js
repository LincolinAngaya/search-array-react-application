import './index.css'
import { Users } from './User';
import { useState } from 'react';
import Table from './Table';
function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <input type="text"
         placeholder="search..." 
         className="search" 
         onChange={(e) => setQuery(e.target.value)}
       />
     <Table  user={Users}/>
    </div>
  );
}

export default App;
