import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormGoogle() {
  return (
    <>
      <Form
        action=""
        className="d-flex justify-content-center mt-3"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://www.google.cl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "100%" }}
        >
          <Button variant="outline-info" className="w-100">
            Iniciar con Google
          </Button>
        </a>
      </Form>
    </>
  );
}

export default FormGoogle;
