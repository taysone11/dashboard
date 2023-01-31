import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../MyTasks/context";
import MyButton from "../MyButton/MyButton";


export default function Posts({...props}) {

    const [checked, setChecked] = useState(props.task.completed)
    const cls = ['post__text']
    
    if (checked) {
        cls.push('completed')
    }

    const {upPost} = useContext(Context) 

    

    return (

        <div className="post">
            
            <div className="post__button-up" onClick={() => upPost(props.task)}>
            <span class="material-icons-outlined">
                arrow_upward
                </span>
                </div>
            <label className="post__label">
            
            
            <input 
            type="checkbox" 
            className="post__checkbox"
            onChange={() => {
                setChecked(!checked)
                props.check(props.task)
            }}
            checked={checked}
            ></input>
               
            <div className="post__body">
            <strong className={cls.join(' ')}>{props.task.body}</strong>
            </div>
            <MyButton id="post__delete"
            onClick={() => props.remove(props.task)}
            >Delete</MyButton>
            </label>
        </div> 

    )

}