export function InputBox({label, placeholder , onChange}) {
    return <div>
        <div className="text-sm font-medium text-left py-2">{label}</div>
        <input type="text" placeholder={placeholder} className="border border-gray-300 rounded-lg w-full p-2" onChange={onChange}/> 
    </div>
}