import React, { useState } from "react";

// Import components
import NavigationBar from "./NavigationBar";
import RedAlert from "./RedAlert";
import GreenAlert from "./GreenAlert";

// Import bootstrap
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const SubmitCom = () => {
  const [titlee, setTitle] = useState("");
  const [authorr, setAuthor] = useState("");
  const [pricee, setPrice] = useState(0);
  const [redAlert, setRedAlert] = useState(false);
  const [greenAlert, setGreenAlert] = useState(false);

  const submitPostHandler = (e) => {
    e.preventDefault();

    if (titlee !== "" && authorr !== "" && pricee !== 0 && pricee !== "") {
      axios
        .post("http://localhost:5000/api/posts", {
          title: titlee,
          author: authorr,
          price: pricee,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setGreenAlert(true);
    } else {
      setRedAlert(true);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="mt-5 container-sm">
        <Form onSubmit={submitPostHandler}>
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {redAlert === false ? null : <RedAlert setRedAlert={setRedAlert} />}
        {greenAlert === false ? null : (
          <GreenAlert setGreenAlert={setGreenAlert} />
        )}
      </div>
    </>
  );
};

export default SubmitCom;
