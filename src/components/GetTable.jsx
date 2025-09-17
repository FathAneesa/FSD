import React, { useEffect, useState } from 'react';
import {Table,TableCell,TableContainer,TableHead,TableRow,TableBody,} from '@mui/material';
import axios from 'axios';

const GetTable = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUser(res.data);
      })},[]);

  return (
    <div>
      <br /><br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Username</strong></TableCell>
              <TableCell><strong>City</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val) => (
              <TableRow key={val.id}>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.username}</TableCell>
                <TableCell>{val.address.city}</TableCell>
                <TableCell>{val.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default GetTable;
