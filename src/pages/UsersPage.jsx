import React, { useEffect, useState } from "react";
import UsersApi from "../API/UsersApi"

import cls from "../styles/UsersPage.css"
import User from "../components/Users/User";


export default function UsersPage() {

    const [users,setUsers] = useState([])

     async function fetchUsers() {
        const response = await UsersApi.getUsers()
        setUsers(response.data)
     }
    
     useEffect(()=> {
        fetchUsers()
     },[])
    return (
        <main>
            <h2 style={{fontFamily:"Unbounded, cursive"}}>Users</h2>
        <div className="users__list">
            {
                users.map(user =>
                    <User user={user} key={user.id}/>
                    )
            }
        </div>
    </main>
    )

}