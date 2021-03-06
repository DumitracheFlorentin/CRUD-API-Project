// Import bootstrap
import { Container, Alert } from "react-bootstrap";

const GreenAlert = ({ setGreenAlert }) => {
  return (
    <>
      <Alert
        className="mt-4"
        variant="success"
        onClose={() => setGreenAlert(false)}
        dismissible
      >
        You created a new post!
      </Alert>
    </>
  );
};

export default GreenAlert;
