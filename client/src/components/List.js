import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Import bootstrap
import { Table, Container, Button } from "react-bootstrap";

const List = ({ list, setList }) => {
  const deletePostHandler = (id) => {
    axios.delete(`http://localhost:5000/api/posts/${id}`).then(() => {
      console.log("Done!");
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((posts) => {
        setList(posts.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [list]);

  return (
    <Container>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value) => {
            const editPostURL = `/posts/${value._id}`;

            return (
              <tr style={{ textAlign: "center" }}>
                <td>{value.title}</td>
                <td>{value.author}</td>
                <td>{value.price}</td>
                <td>
                  <Link to={editPostURL}>Edit</Link>
                </td>
                <td>
                  <Button onClick={() => deletePostHandler(value._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default List;
