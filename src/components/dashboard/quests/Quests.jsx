import React from 'react'

const Quests = () => {
  return (
<div className="dashboard__quests">
                                <span class="material-icons-outlined">monetization_on</span>
                                <div className="middle">
                                    <div className="left">
                                        <h3>Quests</h3>
                                        <h1>313,223</h1>
                                    </div>
                                            <div className="progress"> 
                                            <svg>
                                                <circle cx="43" cy="43" r="38"></circle>
                                            </svg>
                                            <div className="percent"><p>87%</p></div>
                                        </div>    
                                    </div>
                                    <small className="text-muted">last 24 hours</small>

                                </div>     
                            
  )
}

export default Quests