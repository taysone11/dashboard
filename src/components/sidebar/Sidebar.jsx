import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context"

export function Sidebar() {

    const [links, setLinks] = useState([
      {to: "/dashboard" , icon:"dashboard", title:"Dashboard", active:true, classname:"link active"},
      {to: "/tasks" , icon:"list_alt", title:"My tasks",active:false,classname:"link"},
      {to: "/users" , icon:"group", title:"Users",active:false,classname:"link"},
      {to: "/messages" , icon:"mail", title:"Messages",active:false,classname:"link"},
      {to: "/reports" , icon:"report", title:"Report",classname:"link"},
      {to: "/settings" , icon:"settings", title:"Settings",active:false,classname:"link"},
      
    ])
    
    const {isAuth,setAuth} = useContext(AuthContext)


    return (
        
        <aside>
          <div className="top">
              <h2 className="dashboard_MAIN_btn"><span>TAY</span><span className="pr">SONE</span></h2>
          </div>
        
        <div className="sidebar">
          {
            links.map(link =>
                <Link to={link.to} className="a">
                  <span className="material-icons-outlined">{link.icon}</span>
                  <h3>{link.title}</h3>
                </Link>)
          }
          <Link to='log-in' onClick={()=> {
            setAuth(false)
            localStorage.removeItem('auth')
          }}>
                  <span className="material-icons-outlined">logout</span>
                  <h3>Logout</h3>
                </Link>
        </div>
        </aside>

        
      
    )
}