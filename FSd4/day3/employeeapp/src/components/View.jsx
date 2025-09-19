import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  const navigate = useNavigate();
  const [emp, setEmp] = useState([]);

  // fetch employees only once
  useEffect(() => {
    axios.get("http://localhost:3004/view")
      .then((res) => {
        setEmp(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // delete employee
  const Del = (id) => {
    axios.delete(`http://localhost:3004/remove/${id}/`)
      .then(() => {
        alert('Deleted successfully');
        setEmp(emp.filter(e => e._id !== id)); // update UI after delete
      })
      .catch((err) => console.log(err));
  };

  // go to Add.jsx for update
  const updateFunction = (val) => {
    navigate('/add', { state: {val} }); 
  };

  return (
    <div>
      <br /><br /><br />
      <h1>Employee Details</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emp.map((val) => (
              <TableRow key={val._id}>
                <TableCell>{val.Name}</TableCell>
                <TableCell>{val.Age}</TableCell>
                <TableCell>{val.Dept}</TableCell>
                <TableCell>{val.Sal}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => Del(val._id)}
                  >
                    Delete
                  </Button>
                  &nbsp;
                  <Button
                    variant="contained"
                    onClick={()=>updateFunction(val)} > Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default View;
