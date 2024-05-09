import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../hooks/useAuth";

const Register = () => {


    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {createUser, user, setUser, updateUserProfile} = useAuth()
    const notify = () => toast("Congratulations account create successfully!!");
    const notify2 = () => toast.warning("Already have an account");
    const notify3 = () => toast.warning("Must have an Uppercase letter & Lowercase letter in the password");
    const notify4 = () => toast.warning("Length must be at least 6 character");


     

        const handelShowPass = ()=>{


        setShowPass(!showPass)
    }

    const handelCreateUser = (e)=>{
        e.preventDefault();
       

        const email = e.target.email.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        if(password.length<6){
          notify4()
          setError("Length must be at least 6 character")
          return
        }
        const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
        if(!regex.test(password)){
          notify3()
          setError("Must have an Uppercase letter & Lowercase letter in the password")
          return
        }

        createUser(email, password)
        .then(res=>{
            console.log("create succes fully..", res)           
                notify() 
                setUser(res.user)
                navigate('/login')
                updateUserProfile(name, photo) 
                .then(res=>{
                    
                })
        })
        .catch((error)=>{
            console.log(error);
           
            notify2()
           
        })
    }

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center absolute h-52 items-center rounded-lg  justify-center p-20 hover:shadow-lg flex flex-col  lg:text-left   opacity-85">
            <h1 className="font-bold  text-2xl animate__animated animate__backInDown">
              
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
            <p className="animate__animated animate__backInLeft">
              
              <Typewriter
                delaySpeed={500}
                deleteSpeed={10}
                loop={1}
                typeSpeed={200}
                words={[
                    " Create Accound to Access Dashbord...!",
                ]}
              />
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelCreateUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input  "
                  required
                />
                <hr />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input  "
                  required
                />
                <hr />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input "
                  required
                />
                <hr />
              </div>

              <div className="form-control">
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
                    <LiaEyeSolid className="text-xl opacity-80" />
                  )}
                </div>
              </div>
              </div>

              <div className="flex items-center justify-around">
                <div className="form-control mt-6">
                  <button className="btn  bg-rose-300  w-32">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
