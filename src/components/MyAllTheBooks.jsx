import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MySingleBook from "./MySingleBook";

class MyAllTheBooks extends Component {
  state = {
    selectedBook: null,
  };

  handleSelectBook = (book) => {
    this.setState({ selectedBook: book });
  };

  handleClose = () => {
    this.setState({ selectedBook: null });
  };

  render() {
    return (
      <Container>
        {this.state.selectedBook && (
          <MySingleBook
            book={this.state.selectedBook}
            onClose={this.handleClose}
          />
        )}
        <Row xs={1} sm={2} md={3} lg={5} className="g-4">
          {this.props.library.map((book) => (
            <Col key={book.asin}>
              <Card className="h-100">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price} $</Card.Text>
                  <Button variant="success">Buy</Button>
                  <Button
                    variant="secondary"
                    onClick={() => this.handleSelectBook(book)}
                    className="ms-2"
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default MyAllTheBooks;
