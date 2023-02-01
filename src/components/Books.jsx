import {Component} from "react"
import {Container, Row, Button, Form, Col} from "react-bootstrap"
import fantasy from "../books/fantasy.json"
import history from "../books/history.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import scifi from "../books/scifi.json"
import BookList from "./BookList"

class Books extends Component {
    state = {
        query: "",
        genre: "Fantasy",
        books: fantasy
    }

    filterBookList= (e) => {
        this.setState({...this.state, query: e.target.value})
    }

    render() {
        return (
            <section>
                <Container className="mb-4">
                    <Row className="mb-3">
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({...this.state, genre: "Fantasy", books: fantasy})}}>Fantasy</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({...this.state, genre: "History", books: history})}}>History</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({...this.state, genre: "Horror", books: horror})}}>Horror</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({...this.state, genre: "Romance", books: romance})}}>Romance</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({...this.state, genre: "Scifi", books: scifi})}}>Scifi</Button>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Search..." onChange={this.filterBookList} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <BookList genre={this.state.genre} books={this.state.books.filter(b => b.title.toLowerCase().includes(this.state.query))}/>
            </section>
        )
    }
}

export default Books