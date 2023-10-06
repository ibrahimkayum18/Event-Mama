import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-[90%] md:w-[60%] lg:w-[40%] p-3 md:p-8 mt-5 md:mt-8 lg:mt-12 rounded-lg border-2 mx-auto ">
      <h2 className="text-2xl font-bold md:text-4xl mb-5">Please Log In</h2>
      <form>
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
            <button className="w-full py-3 px-5 bg-blue-600 text-white font-bold rounded-lg">Log In</button>
        </div>
        <p>New to Event MAMA? Please <Link className="text-blue-600 hover:underline font-bold" to={'/register'}>Register</Link></p>
        <div className="flex items-center py-2 px-6 border-2 border-blue-600 mt-5 rounded-xl gap-3 text-center justify-center">
        <span className="text-2xl text-blue-600"><FaGoogle></FaGoogle></span>
            <h2 className="text-1xl font-bold"> Google</h2>
        </div>
      </form>
    </div>
  );
};

export default Login;
