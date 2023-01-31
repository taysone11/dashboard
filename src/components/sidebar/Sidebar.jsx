import { useState } from "react"
import { Link } from "react-router-dom"

export function Sidebar() {

    const array1 = document.querySelector(".sidebar")
    
    

  

    return (
        
        <aside>
          <div className="top">
              <h2 className="dashboard_MAIN_btn"><span>TAY</span><span className="pr">SONE</span></h2>
          </div>
        
        <div className="sidebar">
          <Link to="/dashboard"  className="active">
          <span class="material-icons-outlined">dashboard</span>
            <h3>Dashboard</h3>
          </Link >
          <Link to="/tasks" className="">
          <span class="material-icons-outlined">list_alt</span>
            <h3>My tasks</h3>
          </Link >
          <Link to="users" className="" >
          <span class="material-icons-outlined">group</span>
            <h3>Users</h3>
          </Link >
          <Link to="messages" className="">
          <span class="material-icons-outlined">mail</span>
            <h3>Messages</h3>
          </Link >
          <Link to="reports" className="">
          <span class="material-icons-outlined">report</span>
            <h3>Reports</h3>
          </Link >
          <Link to="settings" className="">
          <span class="material-icons-outlined">settings</span>
            <h3>Settings</h3>
          </Link>
          <Link to="log-in" className="">
          <span class="material-icons-outlined">logout</span>
            <h3>Logout</h3>
          </Link>
        </div>
        </aside>

        
      
    )
}