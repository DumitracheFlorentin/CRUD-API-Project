import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

// Import bootstrap
import { Table, Container, Button } from "react-bootstrap";

// Import components
import NavigationBar from "./NavigationBar";

const Post = () => {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/${id}`)
      .then((posts) => {
        setPost(posts.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <Container>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>{isLoading ? post.title : ""}</td>
              <td>{isLoading ? post.author : ""}</td>
              <td>{isLoading ? post.price : ""}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Post;
