import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import "./changepassword.css"; // Update the CSS file name if needed

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Assuming you have some function to retrieve the user's email
    const fetchUserEmail = async () => {
      try {
        // Make an API request to get the user's email
        const response = await axios.get('your-api-endpoint-to-fetch-user-email');
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user email:', error);
        setError('Error fetching user email. Please try again.');
      }
    };

    fetchUserEmail();
  }, []);

  const handleSendOTP = async () => {
    try {
      // Basic validation
      if (!email) {
        setError('Email is required');
        return;
      }

      // Make an API request to send OTP
      const response = await axios.post('your-send-otp-api-endpoint', { email });
      setMessage(response.data.message);
      setOtpSent(true);
      setError('');
    } catch (error) {
      setMessage('');
      setError('Error sending OTP. Please try again.');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      // Make an API request to verify OTP
      const response = await axios.post('your-verify-otp-api-endpoint', { email, otp });
      setMessage(response.data.message);
      setError('');
      // Redirect or proceed to the next step after successful OTP verification
    } catch (error) {
      setMessage('');
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="xyz forgot-password-container">
          <h2>Forgot Password</h2>
          {message && <p className="message">{message}</p>}
          {error && <p className="error">{error}</p>}
          {!otpSent ? (
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly // Make the email field read-only if you want to prevent users from changing it
              />
              <button onClick={handleSendOTP}>Send OTP</button>
            </div>
          ) : (
            <div>
              <label>OTP:</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={handleVerifyOTP}>Verify OTP</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
