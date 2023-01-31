import React, { useEffect, useState } from "react";
import MyInput from "../input/MyInput";
import MyButton from "../MyButton/MyButton";

export default function MySearch({create}) {

    
    const [post, setPost] = useState({body: ''})
    const [classInput, setClassInput]= useState(["input__task"])
    
    //const [val, setVal] = useState('')
    function addNewPost(e) {
        e.preventDefault()
        if (post.body.length > 0) {
        const newPost = {
            ...post, id: Date.now(), completed: false
        }
        create(newPost)
        setPost({body:''})
    } else {
        if (classInput.length == 1){
            setClassInput([...classInput, "__empty"])
            setTimeout(() => {
                setClassInput(["input__task"])
            }, 1000);
        }
    }
    }
    
    const onKeyDown = e => {
        if (e.key === 'Enter') {
            addNewPost(e)
        }
    }
    
    return (
<div className="adder__posts"> 
            <MyInput 
            className={classInput.join('')}
            type="text"
            placeholder="Write a task..." 
            value={post.body}
            onChange={e=> {
                setPost({...post,body:e.target.value})   
            }
            }
            onKeyPress={onKeyDown}
            />
            <MyButton id="add__button" onClick={addNewPost} >Add</MyButton>
        </div>

            
    )

}