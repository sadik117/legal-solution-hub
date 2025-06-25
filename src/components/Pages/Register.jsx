import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, setUser, userUpdate, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
     
    if (!regExPassword.test(password)) {
      toast.error("Password must be at least 6 characters and include uppercase, lowercase, and a number!");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        userUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            toast.error(errorCode);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  const handleGoogleSignIn = () => {
        googleSignIn()
          .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
            navigate(`${ location.state ? location.state : "/" }`);
            toast.success("Google SignIn successful!!");
          })
          .catch(() => {
            toast.error("Google SignIn failed!");
          });
      };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className="text-3xl justify-center text-center font-bold mb-3">
            Register Now
          </h3>
          <form onSubmit={handleRegister} className="form ">
            <label className="label font-bold">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
            />
            <label className="label font-bold">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Attach Your Photo"
              required
            />
            <label className="label font-bold">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label font-bold">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover font-semibold">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4 mb-3 w-full">
              Register
            </button>
            <div>
              <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
            <p className="mt-2 ml-16">
              Already have an account?{" "}
              <span className="font-bold text-yellow-700">
                <Link to="/auth/login">Login</Link>
              </span>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
