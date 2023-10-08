import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase.config";


const Register = () => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const navigate = useNavigate()

    const {googleLogIn, createUser} = useContext(AuthContext)

    const handleCreateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
          return toast.error('Password must be grater than 5 character')
        }
        else if (!/[A-Z]/.test(password)) {
          return toast.error('Password did not have any uppercase character')
        }
        else if (!/[@$!%*?&]/.test(password)) {
          return toast.error('Password did not  any special character')
        }


        createUser(email, password)
        .then(result => {
            
            updateProfile(auth.currentUser, {
                displayName: name , 
                photoURL: photo
              })
              .then(() => {
                toast.success('User Created Successfully')
                setUser(result.user)
                navigate('/login')
              })
              .catch((error) => {
                toast.error(error.message)
                console.log(error.message);
              });
            
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
        .then(result => {
            setUser(result.user)
            toast.success('User Created Successfully')
            
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            toast.error({error})
        })
    }

  return (
    <div className="w-[90%] md:w-[60%] lg:w-[50%] p-3 md:p-8 mt-5 md:mt-8 lg:mt-12 rounded-lg border-2 mx-auto ">
      <h2 className="text-2xl font-bold md:text-4xl mb-5">Please Register</h2>
      <form onSubmit={handleCreateUser}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            name="name"
            placeholder="Name..."
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="photo"
            name="photo"
            placeholder="Photo URL..."
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="input input-bordered "
            required
          />
        </div>
        <div className="mt-6 mb-4">
          <button className="w-full py-3 px-5 bg-blue-600 text-white font-bold rounded-lg">
            Register
          </button>
        </div>
        <p>
          New to Event MAMA? Please
          <Link
            className="text-blue-600 hover:underline font-bold"
            to={"/login"}
          >
            Log In
          </Link>
        </p>
        <div className="flex items-center py-2 px-6 border-2 border-blue-600 mt-5 rounded-xl gap-3 text-center justify-center">
        <button onClick={handleGoogleLogIn} className="text-2xl text-blue-600 flex justify-center item-center font-semibold"><FaGoogle className="mt-1 mr-3 text-orange-400"></FaGoogle> Google</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
