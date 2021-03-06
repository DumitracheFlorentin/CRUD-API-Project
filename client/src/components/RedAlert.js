// Import bootstrap
import { Container, Alert } from "react-bootstrap";

const RedAlert = ({ setRedAlert }) => {
  return (
    <>
      <Alert
        className="mt-4"
        variant="danger"
        onClose={() => setRedAlert(false)}
        dismissible
      >
        You have to complete all the fields!
      </Alert>
    </>
  );
};

export default RedAlert;
