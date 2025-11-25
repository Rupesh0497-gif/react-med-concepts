import React, {useState} from 'react';
import ErrorComp from './ErrorComp';


export default function CustomInput({value, errors={}, feildName, onChange, onBlur, label}){
    return ( 
        <div className="flex flex-col my-3 w-full mr-3">
  <label className="text-sm font-medium text-gray-700 mb-1">
    {label} <span className="text-red-500">*</span>
  </label>

  <input
    type="text"
    value={value}
    className={`w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brandBlue focus:border-brandBlue transition
       ${errors[feildName] && errors[feildName].message  ? "border-red-500" : "border-gray-300"} 
    `}
    name={feildName}
    onChange={onChange}
    onBlur={onBlur}
  />
  {errors && errors[feildName] && errors[feildName].message &&
  <ErrorComp message={errors[feildName].message}/>
}
</div>
    )
}