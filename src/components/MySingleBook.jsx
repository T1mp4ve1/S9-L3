import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MySingleBook({ book, onClose }) {
  return (
    <Card id="SingleBook">
      <Card.Img id="SingleBookImg" variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text><strong>Price:</strong> {book.price} $</Card.Text>
        <Card.Text><strong>Asin:</strong> {book.asin}</Card.Text>
        <Card.Text><strong>Category:</strong> {book.category}</Card.Text>
        <Button variant="danger" onClick={onClose}>
          CLOSE
        </Button>
      </Card.Body>
    </Card>
  );
}
export default MySingleBook;
