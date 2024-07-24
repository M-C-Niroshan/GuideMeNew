import React from 'react';

const SignUpForm = () => {
  return (
    <form>
      <h1>Create Account</h1>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
