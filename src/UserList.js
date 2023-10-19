import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error('Error concerne user data:', error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="user-list-header">List of Users</h2>
      <ul className="user-list">
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
