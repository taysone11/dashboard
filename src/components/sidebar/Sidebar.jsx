

export function Sidebar() {
    return (
        
        <aside>
          <div className="top">
              <h2 className="dashboard_MAIN_btn"><span>TAY</span><span className="pr">SONE</span></h2>
          </div>
        
        <div className="sidebar">
          <a href=""  className="active">
          <span class="material-icons-outlined">dashboard</span>
            <h3>Dashboard</h3>
          </a >
          <a href="">
          <span class="material-icons-outlined">list_alt</span>
            <h3>My tasks</h3>
          </a >
          <a href="">
          <span class="material-icons-outlined">group</span>
            <h3>Users</h3>
          </a >
          <a href="" >
          <span class="material-icons-outlined">mail</span>
            <h3>Messages</h3>
          </a >
          <a href="">
          <span class="material-icons-outlined">report</span>
            <h3>Reports</h3>
          </a >
          <a href="">
          <span class="material-icons-outlined">settings</span>
            <h3>Settings</h3>
          </a >
          <a href="">
          <span class="material-icons-outlined">logout</span>
            <h3>Logout</h3>
          </a >
        </div>
        </aside>

        
      
    )
}