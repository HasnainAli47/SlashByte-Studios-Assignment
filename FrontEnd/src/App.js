import React, { useState } from 'react';
import './App.css';
import UserList from './UserList';
import UserForm from './UserForm';
import axios from 'axios';
import { useEffect } from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);
  // Call this when users are changed
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000'); 
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [users]);

  // Add user
  const addUser = async (user) => {
    try {
      const response = await axios.post("http://localhost:5000/register", {
        name: user.name, 
        email: user.email,
        role: user.role
      });
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // Delete User
  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/user/${userId}`); 
      // setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ backgroundColor: 'white', py: 4, borderRadius: 2, boxShadow: 1 }}>
      <CssBaseline />
      <Typography variant="h5" component="h3" gutterBottom>
        Hasnain Ali Task for SlashByte Studios
      </Typography>
      <UserForm onAddUser={addUser} />
      <UserList users={users} onDeleteUser={deleteUser} />
    </Container>
  );
}

export default App;
