import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Container, Paper} from '@mui/material';
import React, {useState} from "react";

export default function Students() {
    const paperStyle = {padding: 20, height: '70vh', width: 280, margin: "20px auto"}
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([]);

    const handleClick = (e) => {
        e.preventDefault()
        const student = {name, address};
        console.log(student);
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)

        }).then(response => {
            console.log("New Student Created");
            console.log(response);
        })
    }
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Add Student</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                               value={name} onChange={(e) => setName(e.target.value)}/>

                    <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
                               value={address} onChange={(e) => setAddress(e.target.value)}/>
                    <Button variant="contained" onClick={handleClick}>Submit</Button>

                </Box>

            </Paper>
        </Container>

    );
}