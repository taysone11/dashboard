import React from "react";
import { useNavigate } from "react-router-dom";


export default function User({user}) {

    const redirect = useNavigate()


    return (
<div className="user" onClick={() => redirect(`/users/${user.id}`)}>
    <div>
        <strong>{user.id}. </strong>
        
        <strong>
            {user.name} (<strong className="user__username">{user.username}</strong>)
        </strong>
        
        
    </div>
    <i  id="user_button__info" class="fa-solid fa-circle-info"></i>
    
</div>


    )

}