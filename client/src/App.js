import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";

// Import bootstrap
import { Container } from "react-bootstrap";

// Import components
import NavigationBar from "./components/NavigationBar";
import List from "./components/List";
import SubmitCom from "./components/SubmitCom";
import Post from "./components/Post";

const App = () => {
  // Bring the posts
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((posts) => {
        setList(posts.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <Route path="/" exact>
        <NavigationBar />
        <List list={list} setList={setList} />
      </Route>

      <Route path="/submit" exact>
        <SubmitCom />
      </Route>

      <Route path="/posts/:id" exact>
        <Post />
      </Route>
    </div>
  );
};

export default App;
