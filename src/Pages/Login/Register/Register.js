import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../contexts/AuthProvider/useAuth';
import cover1 from '../../../images/cover1.png';
import './Register.css'
const Register = () => {
    const [loginData, setLoginData] = useState();
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
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
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6} className="login-box">
                    <Typography variant="body1" gutterBottom>CREATE ACCOUNT</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Name"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email Address"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                            variant="contained">Create Account</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/login">
                            <Button variant="text">Already have an account? Login!</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Account created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={cover1} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;