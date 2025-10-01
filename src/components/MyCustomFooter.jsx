import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function MyCustomFooter() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mt-5">
      <Container className="justify-content-center">
        <Navbar.Text>
          © 1809 Il mio sito - Tutti i diritti riservati
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default MyCustomFooter;
