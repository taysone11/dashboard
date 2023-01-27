import React from 'react'

const Users = () => {
  return (
    <div className="dashboard__newUsers">

                                    <span class="material-icons-outlined">group_add</span>
                                    <div className="middle">
                                        <div className="left">
                                            <h3>Users</h3>
                                            <h1>+290</h1>
                                        </div>
                                        
                                        <div className="progress"> 
                                            <svg>
                                            <circle cx="43" cy="43" r="38"></circle>
                                            </svg>
                                            <div className="percent"><p>95%</p></div>
                                        </div>
                                    </div>  
                                    <small className="text-muted">last 24 hours</small>
                                </div>
  )
}

export default Users