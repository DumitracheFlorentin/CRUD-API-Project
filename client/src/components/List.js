import React from "react";
import { Link } from "react-router-dom";

// Import bootstrap
import { Table, Container, Button } from "react-bootstrap";

const List = ({ list }) => {
  return (
    <Container>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Edit</th>
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
                  <Link to={editPostURL} className="mr-2">
                    Edit the post
                  </Link>
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
