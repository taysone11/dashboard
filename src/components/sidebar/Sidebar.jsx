import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context"
import {Data} from "./Data"
export function Sidebar() {

    
    
    const {isAuth, setAuth} = useContext(AuthContext)
  const [selected, setSelected] = useState(0)


    return (
        
        <aside>
          <div className="top">
              <h2 className="dashboard_MAIN_btn"><span>TAY</span><span className="pr">SONE</span></h2>
          </div>
        
        <div className="sidebar">
          {
            Data.map((link, index) =>
                <Link to={link.to} 
                key={index}
                className={selected===index?"active":""}
                onClick={() => setSelected(index)}
                >
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