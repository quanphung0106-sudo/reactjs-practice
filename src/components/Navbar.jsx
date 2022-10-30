import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img src="" alt="" />
        <span>Quan</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
