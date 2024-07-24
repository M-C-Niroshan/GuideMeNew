import React from 'react';

const SignInFormGuider = () => {
  return (
    <form>
      <h1>Sign In</h1>
      <span>or use your email password</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forget Your Password?</a>
      <button>Sign In</button>
    </form>
  );
};

export default SignInFormGuider;
