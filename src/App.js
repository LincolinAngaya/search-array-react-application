import './index.css'
import { Users } from './User';
import { useState } from 'react';
import Table from './Table';
function App() {
  const [query, setQuery] = useState("");
  const search =(user) => {
   return user.filter(user => user.first_name.toLowerCase().includes(query))
  }
  return (
    <div className="app">
      <input type="text"
         placeholder="search..." 
         className="search" 
         onChange={(e) => setQuery(e.target.value)}
       />
     <Table  user={search(Users)}/>
    </div>
  );
}

export default App;
