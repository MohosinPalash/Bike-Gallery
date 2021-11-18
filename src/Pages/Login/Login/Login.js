import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }
    const handleLoginSubmit = e => {
        alert('submit');
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>LOGIN</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email Address"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                            variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New user? Create new account!</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h1>Royal Enfield Image</h1>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;