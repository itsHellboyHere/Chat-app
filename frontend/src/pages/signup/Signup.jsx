import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"

const Signup = () => {
    const [inputs, setInputs]=useState({
        fullName:"",
        username: "",
        password:"",
        confirmPassword:"",
        gender:"",
    })

const {loading, signup} =useSignup()

const handleSubmit= async (e)=>{
    e.preventDefault()
    await signup(inputs)
    // console.log(inputs)
    setInputs({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:"",
    })
}
const handlegenderCheckbox=(gender)=>{
        setInputs({...inputs,gender})
}

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"> 
    <h1 className="text-3xl font-semibold text-center text-gray-300">Signup
            <span className="text-blue-500">ChatApp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
            <label className="label p-2">
                <span className="text-base label-text text-stone-200">Full Name</span>
            </label>
            <input type="text" placeholder="abc xyz" className="w-full input input-bordered h-10"
            value={inputs.fullName}
            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
            ></input>
        </div>
          <div>
            <label className="label p-2">
                <span className="text-base label-text text-stone-200">Username</span>
            </label>
            <input type="text" placeholder="abc1" className="w-full input input-bordered h-10"
            value={inputs.username}
            onChange={(e)=>setInputs({...inputs,username:e.target.value})}
            ></input>
        </div>
          <div>
            <label className="label p-2">
                <span className="text-base label-text text-stone-200">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
            value={inputs.password}
            onChange={(e)=>setInputs({...inputs,password:e.target.value})}
            ></input>
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-stone-200">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10"
            value={inputs.confirmPassword}
            onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
            ></input>
        </div>
        {/* Gender checkbox */}
    <GenderCheckBox onGenderChange={handlegenderCheckbox}  genderValue={inputs.gender} />
            <Link to="/login" className="text-sm p-2 text-stone-200 hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</Link>
            <div>
        <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading ? <spsn className='loading loading-spinner'></spsn>:"Sign Up"}
        </button>
    </div>
            </form>
        </div>
    </div>
  )
}
export default Signup






// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"> 
//     <h1 className="text-3xl font-semibold text-center text-gray-300">Signup
//             <span className="text-blue-500">ChatApp</span>
//             </h1>
//             <form>
//                 <div>
//             <label className="label p-2">
//                 <span className="text-base label-text text-stone-200">Full Name</span>
//             </label>
//             <input type="text" placeholder="abc xyz" className="w-full input input-bordered h-10"></input>
//         </div>
//           <div>
//             <label className="label p-2">
//                 <span className="text-base label-text text-stone-200">Username</span>
//             </label>
//             <input type="text" placeholder="abc1" className="w-full input input-bordered h-10"></input>
//         </div>
//           <div>
//             <label className="label p-2">
//                 <span className="text-base label-text text-stone-200">Password</span>
//             </label>
//             <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10"></input>
//         </div>
//         <div>
//             <label className="label p-2">
//                 <span className="text-base label-text text-stone-200">Confirm Password</span>
//             </label>
//             <input type="text" placeholder="Confirm Password" className="w-full input input-bordered h-10"></input>
//         </div>
//         {/* Gender checkbox */}
//     <GenderCheckBox/>
//             <a href="#" className="text-sm p-2 text-stone-200 hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>
//             <div>
//         <button className="btn btn-block btn-sm mt-2">Signup</button>
//     </div>
//             </form>
//         </div>
//     </div>
//   )
// }
// export default Signup