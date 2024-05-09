import {  useState } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const {signInWithGoogle,  signIn} = useAuth()
 
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const notify = () => toast("Congratulations login successfully!!");
  const notify2 = () => toast.warning("Please check out email and password");
  const notify3 = () =>
    toast.warning(
      "Must have an Uppercase letter & Lowercase letter in the password"
    );
  const notify4 = () => toast.warning("Length must be at least 6 character");

  const handelShowPass = () => {
    setShowPass(!showPass);
  };

  const handelGoogleLogin = () => {
    setLoading(!isLoading);
    signInWithGoogle()
    .then((res) => {
      setLoading(isLoading);
      
      notify();
         navigate(location.state)
    })
    
    
  };

  const handelGithubLogin = () => {
    setLoading(!isLoading);

    gitHubLogin().then((res) => {
      setLoading(isLoading);
      notify();
        navigate(location.state)
    });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    setLoading(!isLoading);

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (password.length < 6) {
      notify4();
      setError("Length must be at least 6 character");
      return;
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
    if (!regex.test(password)) {
      notify3();
      setError(
        "Must have an Uppercase letter & Lowercase letter in the password"
      );
      return;
    }

    signIn(email, password)
      .then((res) => {
        setLoading(isLoading);
        notify();
        navigate(location.state)
      })
      .catch((error) => {
        setLoading(isLoading);
        // console.log(error);
        notify2();
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
     <div className="text-center">
     {isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        ""
      )} 
     </div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center   items-center rounded-lg  justify-center p-20  flex flex-col  lg:text-left  opacity-85">
           <div className="text-center hover:shadow-md absolute p-8 rounded-md">
           <h1 className="font-bold text-3xl animate__animated animate__backInDown">
              
              <Typewriter
                delaySpeed={500}
                deleteSpeed={10}
                loop={1}
                typeSpeed={200}
                words={[
                    "WELCOME...!",
                ]}
              />
            </h1>
            <hr />
            <p className="animate__animated mt-10 font-medium animate__backInLeft">
              Login to Access Dashbord
              <Typewriter
                delaySpeed={500}
                deleteSpeed={10}
                loop={1}
                typeSpeed={200}
                words={[
                    "Login to Access Dashbord...!",
                ]}
              />
            </p>
           </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input "
                  required
                />
                <hr />
              </div>

              <div className="flex items-center">
                <div>
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="password..."
                    name="password"
                    className="input w-[300px] relative "
                    required
                  />

                  <hr />
                </div>
                <div
                  onClick={handelShowPass}
                  type="submit"
                  name="password"
                  className=" mt-10 ml-[260px] absolute  "
                >
                  {!showPass ? (
                    <LiaEyeSlashSolid className="text-xl text-slate-700 opacity-80" />
                  ) : (
                    <LiaEyeSolid className="text-xl text-slate-700 opacity-80" />
                  )}
                </div>
                
              </div>
              <div className="text-end">            
                    <Link className=" text-sm font-bold opacity-80 hover:text-blue-950 text-blue-500" to='/register'> Registration...? </Link>
                    <hr />
                </div>
              <div className="flex items-center justify-around">
                <div className="form-control mt-6">
                  <button className="btn  w-36 bg-blue-400">Login</button>
                </div>
                
              </div>
            </form>
            <div className="text-center">
              <button
                onClick={handelGoogleLogin}
                className="btn btn-wide bg-blue-400 text-3xl"
              >
                <FcGoogle />
              </button>
            </div>
            <div className="text-center mt-5 pb-16">
              {/* <button
                onClick={handelGithubLogin}
                className="btn btn-wide bg-red-300 text-3xl"
              >
                <FaGithub />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
