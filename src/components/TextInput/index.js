import React from 'react'

function TextInput({name, value, onChange, label, type="text", error, className}) {
    return (
        <div className="w-full">
            <label htmlFor={name} className="block uppercase tracking-wide text-white text-xs font-bold mb-2"> {label} </label>
            <input className="w-full ring-2 ring-transparent outline-none focus:ring-green-500 text-black px-1 py-2 rounded" type={type} value={value} onChange={onChange} name={name}/>
            {error && <div className="text-red-500 text-xs italic">{error}</div>}
        </div>
    )
}

export default TextInput
