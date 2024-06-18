import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 ">
        <input type="text" placeholder="Search" className="input input-bordered rounded-full"></input>
        <button className="btn btn-circle bg-sky-500 text-stone-200">
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}
export default SearchInput

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2 ">
//         <input type="text" placeholder="Search" className="input input-bordered rounded-full"></input>
//         <button className="btn btn-circle bg-sky-500 text-stone-200">
//             <IoSearchSharp className='w-6 h-6 outline-none'/>
//         </button>
//     </form>
//   )
// }
// export default SearchInput