// /client/src/App.js

import React, { useState, useEffect } from "react";

// SERVICES
import postService from './services/postService';

function App() {
  const [posts, setposts] = useState(null);

  useEffect(() => {
    if(!posts) {
      getPosts();
    }
  })

  const getPosts = async () => {
    let res = await postService.getAll();
    console.log(res);
    setposts(res);
  }

  const renderPost = post => {
    return (
      <li key={post._id} className="list__item post">
        <h3 className="post__user">{post.user}</h3>
        <p className="post__text">{post.text}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(posts && posts.length > 0) ? (
          posts.map(post => renderPost(post))
        ) : (
          <p>No posts in database.</p>
        )}
      </ul>
    </div>
  );
}

export default App;