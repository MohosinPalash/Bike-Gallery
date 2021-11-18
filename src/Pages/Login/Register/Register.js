import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../contexts/AuthProvider/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState();

    const { registerUser } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.confirmPassword) {
            alert('Password does not match');
            return;
        }
        registerUser(loginData.email, loginData.password);
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
                            type="email"
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                            variant="contained">Create Account</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/login">
                            <Button variant="text">Already have an account? Login!</Button>
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

export default Register;