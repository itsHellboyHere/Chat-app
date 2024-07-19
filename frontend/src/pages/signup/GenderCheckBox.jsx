const GenderCheckBox = ({onGenderChange,genderValue}) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${genderValue === 'male'?"selected":""}`}>
                <span className="label-text text-stone-200">Male</span>
                <input type="checkbox" className="checkbox border-slate-200"
                checked={genderValue==='male'}
                onChange={()=>onGenderChange('male')}
                ></input>
            </label>
        </div>
         <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${genderValue === 'female'?"selected":""}`}>
                <span className="label-text text-stone-200">Female</span>
                <input type="checkbox" className="checkbox border-slate-200"
                checked={genderValue==='female'}
                onChange={()=>onGenderChange('female')}
                ></input>
            </label>
        </div>
        <div></div>
    </div>
  )
}
export default GenderCheckBox