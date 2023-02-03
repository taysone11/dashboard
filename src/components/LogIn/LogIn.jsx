import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context'

const LogIn = () => {
  const {setAuth} = useContext(AuthContext)
function login() {
  setAuth(true)
  localStorage.setItem("auth",'true')
  return <Navigate to="/dashboard"/>
}

  return (
    <div className="Log-in">

      
      <h2 className="dashboard_MAIN_btn"><span>TAY</span><span className="pr">SONE</span></h2>
            
     <form onSubmit={login}>
      <input type="text" placeholder='Введите логин'/>
      <input type="password" placeholder='Введите пароль'/>
      <button >Log in</button>
      </form> 
    </div>
  )
}

export default LogIn