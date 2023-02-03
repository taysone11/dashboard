import React, { useState, useEffect } from "react";
import FilterBar from "../components/MyTasks/filterBar/FilterBar";
import PostList from "../components/MyTasks/PostsComponents/PostList";
import MySearch from "../components/MyTasks/search/MySearch";
import UsersApi from "../API/UsersApi";
import { Context } from "../components/MyTasks/context";
import "../styles/TasksPage.css";
export default function TasksPage() {
  const [flag, setFlag] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelecterSort] = useState("");

  

  const [num, setNum] = useState(0);
  useEffect(() => {
    
  }, [num]);

  const removePost = (task) => {
    setPosts(posts.filter((p) => p.id !== task.id));
  };

  function check(post) {
    post.completed = !post.completed;
    setFlag(!flag);
  }

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function sortPosts(sort) {
    setSelecterSort(sort);
    if (sort === "default") setPosts(posts);
    if (sort === "completed") {
      setPosts([...posts].sort((a, b) => b.completed - a.completed));
    } else {
      setPosts([...posts].sort((a, b) => a.completed - b.completed));
    }
  }

  function deleteSelected() {
    setPosts(posts.filter((p) => p.completed !== true));
  }
  function deleteAll() {
    setPosts([]);
  }

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("posts")));
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts, flag]);

  function upPost(task) {
    let buff = posts;
    buff.unshift(task);
    buff.splice(buff.lastIndexOf(task), 1);
    setPosts([...buff]);
  }

  return (
    <Context.Provider
      value={{
        upPost,
      }}
    >
      <main>
        <h2 style={{ fontFamily: "Unbounded, cursive" }}>My tasks</h2>

        <div className="App">
          <MySearch create={createPost} />
          <hr style={{ margin: "10px" }}></hr>
          <FilterBar
            deleteAll={deleteAll}
            deleteSelected={deleteSelected}
            onChange={(sort) => sortPosts(sort)}
            selectedSort={selectedSort}
          />
          {!posts.length ? (
            <div className="post__zero">No tasks today</div>
          ) : (
            <PostList
              posts={posts}
              setPosts={setPosts}
              remove={removePost}
              check={check}
              num={num}
              setNum={setNum}
            />
          )}
        </div>
      </main>
    </Context.Provider>
  );
}
