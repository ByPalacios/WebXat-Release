import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import logoutIcon from '../img/logout.png';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">RUINE TT</span>
      <div className="user">
      <img src={currentUser.photoURL} alt="" style={{ borderRadius: '50%'}} />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>
          <img src={logoutIcon} alt="logout" /> 
        </button>
      </div>
    </div>
  )
}

export default Navbar