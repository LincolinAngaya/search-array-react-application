import './index.css'
import { Users } from './User';
import { useState } from 'react';
import Table from './Table';
function App() {
  const [query, setQuery] = useState("");
  const keys=["first_name","email","last_name"]

  // console.log(Users[0]["email"])

  const search =(user) => {
   return user.filter(user =>
   keys.some(key =>user[key].toLowerCase().includes(query) ))}

    //  user.filter(user => user.first_name.toLowerCase().includes(query) 
  //  ||user.email.toLowerCase().includes(query)
  //  ||user.last_name.toLowerCase().includes(query))
  
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
