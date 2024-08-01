import React, { useEffect, useState } from "react";
import axios from 'axios';
import Page from "./components/Page";
import './css/Settings.css';

export default function Settings() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
	const fetchProfileData = async () => {
	  try {
		const userDetails = JSON.parse(localStorage.getItem('User details'));
		const token = userDetails?.token;

		if (!token) {
		  setError('No token found');
		  return;
		}

		const response = await axios.get('https://ankit-iptv-backend.vercel.app/api/user/profile', {
		  headers: {
			'Authorization': `Bearer ${token}`,
		  },
		});

		const data = await response.data;
		setUsername(data.username);
		setEmail(data.email);
		
	  } catch (err) {
		setError('Failed to fetch profile data');
	  }
	};

	fetchProfileData();
  }, []);

  const handleSave = async (event) => {
	event.preventDefault();
	try {
	  const userDetails = JSON.parse(localStorage.getItem('User details'));
	  const token = userDetails?.token;

	  if (!token) {
		setError('No token found');
		return;
	  }

	  const response = await axios.put('https://ankit-iptv-backend.vercel.app/api/user/update', {
		username,
		email,
		password,
	  }, {
		headers: {
		  'Authorization': `Bearer ${token}`,
		  'Content-Type': 'application/json',
		},
	  });
	  console.log('Update response:', response.data);

	  setSuccess('Profile updated successfully');
	} catch (err) {
	  setError('Failed to update profile');
	}
  };

  return (
	<Page title="Profile Settings">
	  <div id="set">
		<div id="profile-edit-save">
		  <div id="editProfile">My Profile</div>
		</div>
		<div id="profile-edit-area">
		  <form onSubmit={handleSave}>
			<div id="edit-area-left">
			  <table>
				<tbody>
				  <tr>
					<td className="edit-title">Username:</td>
					<td><input type="text" className="profileInputBox" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /></td>
				  </tr>
				  <tr>
					<td className="edit-title">Email:</td>
					<td><input type="text" className="profileInputBox" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
				  </tr>
				  <tr>
					<td className="edit-title">Password:</td>
					<td><input type="text" className="profileInputBox" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
				  </tr>
				</tbody>
			  </table>
			  <div className="edit-save"><button id="editSave" type="submit">save</button></div>
			</div>
		  </form>
		  {error && (
			<div className="error-message">{error}</div>
		  )}
		  {success && (
			<div className="success-message">{success}</div>
		  )}
		</div>
	  </div>
	</Page>
  );
}