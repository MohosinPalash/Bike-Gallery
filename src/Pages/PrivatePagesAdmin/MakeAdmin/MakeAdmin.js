import { TextField, Button, Alert } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);

    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://infinite-badlands-08899.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    console.log(data);
                }

            })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Email Address"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>

            </form>
            {success && <Alert severity="success">Admin created successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;