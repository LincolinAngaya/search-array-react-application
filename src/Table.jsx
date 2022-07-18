import React from 'react'

const Table = ({user}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
           {user.map((user) =>(
    
            <tr key ={user.id}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
             
            </tr>
          ))}   
        </tbody>
    </table>
  )
}

export default Table

{/* <ul className="list">
{Users.filter((user) => user.first_name.toLowerCase().includes(query))
.map((user) =>(
    <li key ={user.id}className="listItem">{user.first_name}</li>
))}
        
      </ul> */}