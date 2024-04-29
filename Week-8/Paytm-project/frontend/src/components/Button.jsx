export function Button({label , onClick}) {
    return <div >
    <button className="w-full rounded-full bg-black text-white h-10 text-center text-lg px-2" onClick={onClick}>{label}</button>
  </div>
}