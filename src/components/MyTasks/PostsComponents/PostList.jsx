
import React from "react";
import Posts from "./Posts";

export default function PostList({posts, remove, check, setPosts, num, setNum}) {
    
    return (

        


    <div className="posts__wrapper">
            {
                posts.map(task => 
                    <Posts task={task} key={task.id} remove={remove} check={check} setPosts={setPosts} posts={posts} num={num} setNum={setNum}/>
                    )
            }
            
            </div>
        
    )

}






