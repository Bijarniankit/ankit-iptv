import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import '../css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
	event.preventDefault();
	try {
	  const response = await axios.post('https://ankit-iptv-backend.vercel.app/api/auth/signin', {
		email,
		password,
	  });

	  const data = response.data;
	  // Handle successful login, e.g., redirect to home page or save token
	  localStorage.setItem('User details', JSON.stringify(data));
	  window.location.href = '/home';
	} catch (err) {
	  setError('Invalid email or password');
	}
  };

  return (
	<div className="login-wrapper">
	  <Container maxWidth="sm" className="login-container">
		<Box className="login-box">
		  <Typography variant="h4" component="h1" gutterBottom>
			Login
		  </Typography>
		  <form className="login-form" onSubmit={handleSubmit}>
			<TextField
			  label="Email"
			  variant="outlined"
			  fullWidth
			  margin="normal"
			  value={email}
			  onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
			  label="Password"
			  type="password"
			  variant="outlined"
			  fullWidth
			  margin="normal"
			  value={password}
			  onChange={(e) => setPassword(e.target.value)}
			/>
			{error && (
			  <Typography variant="body2" color="error" align="center">
				{error}
			  </Typography>
			)}
			<Button variant="contained" color="primary" type="submit" fullWidth>
			  Login
			</Button>
		  </form>
		  <Typography variant="body2" color="textSecondary" align="center" className="signup-option">
			<br />
			Don't have an account? <Link href="/signup">Sign Up</Link>
		  </Typography>
		</Box>
	  </Container>
	</div>
  );
};

export default Login;