export default function({ children }:{
    children: React.ReactNode
}) {
    return <div>
        <div className="border-b text-center">
        Login now to access the dashboard
    </div>
    {children}
    </div>
    
}
