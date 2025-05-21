import React, { useState } from 'react';

function VerifyEmail() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/auth/verify?token=${token}`, {
        method: 'GET',
      });

      const data = await response.text();
      setMessage(data);
    } catch (error) {
      setMessage('Verification failed.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Verify Email</h2>
      <input
        type="text"
        placeholder="Enter verification token"
        className="w-full p-2 mb-3 border rounded"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button
        onClick={handleVerify}
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        Verify
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

export default VerifyEmail;
