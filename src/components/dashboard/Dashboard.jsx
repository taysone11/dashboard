import React from 'react'
import {Link} from "react-router-dom"
import Analitics from './analitics/Analitics'
import Table from "./table/Table"
import TotalProfit from "./totalProfit/TotalProfit"
import TotalSales from "./totalSales/TotalSales"
import Quests from "./quests/Quests"
import Users from "./users/Users"




const Dashboard = () => {
  return (
    <main>
            <div className="main-header">
                <h2 style={{fontFamily:"Unbounded, cursive"}}>Dashboard</h2>
                <div className="date">
                    <input type="date"></input>
                </div>
            </div>
            <div className="materials">    
                <div className='top'>
                    <Analitics />
                    <Users/>
                    <TotalProfit/>
                    <TotalSales/>
                    <Quests/>
                </div>
                <div className='bottom'>
                    <Table/>
                    <Link to='/' className='Linka'>Show All</Link>
                </div>
             </div>
    </main>
  )
}

export default Dashboard