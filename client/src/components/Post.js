import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

// Import bootstrap
import { Table, Container, Button, Form } from "react-bootstrap";

// Import components
import NavigationBar from "./NavigationBar";

const Post = () => {
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [titlee, setTitle] = useState("");
  const [authorr, setAuthor] = useState("");
  const [pricee, setPrice] = useState(0);

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

  const updatePostHandler = (e) => {
    e.preventDefault();

    axios.patch(`http://localhost:5000/api/posts/${id}`, {
      title: titlee,
      author: authorr,
      price: pricee,
    });
  };

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
      <Container>
        <h1 style={{ fontSize: "35px", marginTop: "2rem" }}>Edit the post!</h1>
        <div className="mt-5 container-sm">
          <Form onSubmit={updatePostHandler}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Author"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mr-4">
              Update
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Post;
