const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Login
            <span className="text-blue-500">ChatApp</span>
            </h1>
    {/* form */}
    <form>
        <div>
            <label className="label p-3">
                <span className="text-base label-text text-stone-200">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-18"></input>
        </div>
        <div>
            <label className="label p-3">
                <span className="text-base label-text text-stone-200">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-18"></input>
        </div>
    <a href="#" className="text-sm p-2 text-stone-200 hover:underline hover:text-blue-600 mt-2 inline-block">Don't have an account?</a>
    <div>
        <button className="btn btn-block btn-sm mt-2">Login</button>
    </div>
    </form>
        </div>
        </div>
  )
}
export default Login