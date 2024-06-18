const GenderCheckBox = () => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-stone-200">Male</span>
                <input type="checkbox" className="checkbox border-slate-200"></input>
            </label>
        </div>
         <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-stone-200">Female</span>
                <input type="checkbox" className="checkbox border-slate-200"></input>
            </label>
        </div>
        <div></div>
    </div>
  )
}
export default GenderCheckBox