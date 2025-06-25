import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { NavLink } from "react-router";

const Navbar = () => {
  const {user, logOut} = use(AuthContext);
  const handleLogout = () =>{
    logOut()
    .then(() => { 
    }).catch(() => {
     toast.error("An error happened!!")
    });
  }
  return (
    <div className="navbar w-11/12 mx-auto rounded-xl bg-[#000080] px-2 md:px-5 border border-amber-50 mt-1">
      <div className="flex-1">
        <div className="flex">
        <img className="w-8 h-7" src="https://i.ibb.co/W4MkgKqt/honey-bee-469560-1280.png" alt="honeyapp" />
        <Link to="/" className="ml-1 md:ml-1 text-base md:text-lg font-bold text-yellow-400">App Store</Link>
        </div>
      </div>

      <div className="mr:5 md:mr-70 space-x-3">
   
     
      <NavLink to="/"
              className={({isActive}) =>
              isActive ? "text-amber-400 font-semibold" : "text-white"  }>
              Home
            </NavLink>         
      <NavLink to="/profile"
              className={({isActive}) =>
              isActive ? "text-amber-400 font-semibold" : "text-white"  }>
              MyProfile
            </NavLink>         


      </div>

      <div className="flex space-x-3">
       <div title={user?.displayName || ""} >

       <img className="w-9 h-9 mt-0.5 rounded-full bg-amber-100 p-0.5" src={`${user ? user.photoURL : "https://i.ibb.co/mF5dVJ6w/9131478.png"}`} alt="user" />

       </div>

       {
        user ? <button onClick={handleLogout} className="btn bg-amber-600 text-white rounded-lg px-5 w-[60px] md:w-[100px]">Logout</button> : <Link to="/auth/login"><button className="btn bg-amber-600 text-white rounded-lg px-5 w-[60px] md:w-[100px]">Login</button></Link>
       }
      
      </div>
    </div>
  );
};

export default Navbar;
