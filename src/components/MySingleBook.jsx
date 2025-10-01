import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

function MySingleBook({ book, onClose }) {
  return (
    <Card id="SingleBook">
      <Card.Img id="SingleBookImg" variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price} $</Card.Text>
        <Button variant="danger" onClick={onClose}>
          CLOSE
        </Button>
      </Card.Body>
    </Card>
  );
}
export default MySingleBook;
