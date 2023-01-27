import React from 'react'

const TotalSales = () => {
  return (
    <div className="dashboard__sales">
                                    <span class="material-icons-outlined">trending_up</span>
                                    <div className="middle">
                                        <div className="left">
                                        <h3>Total sales</h3>
                                        <h1>4,120</h1>
                                        </div>
                                        
                                        <div className="progress"> 
                                                <svg>
                                                <circle cx="43" cy="43" r="38"></circle>
                                                </svg>
                                                <div className="percent"><p>43%</p></div>
                                            </div>  
                                            
                                        
                                    </div>
                                    <small className="text-muted">last 24 hours</small>
                                    
                                </div>
  )
}

export default TotalSales