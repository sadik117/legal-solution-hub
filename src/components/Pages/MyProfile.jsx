import React, { useContext, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
    } catch {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <Helmet>
        <title>My Profile</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
      <img
        src={user?.photoURL}
        alt="Profile Photo"
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <p className="text-center font-semibold">{user?.email}</p>

      <form onSubmit={handleUpdate} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <Link to="/forgetpassword" className="link link-hover text-sm font-medium">
            Forgot password?
          </Link>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
