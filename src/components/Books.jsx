import {Component} from "react"
import {Container, Row, Button, Form, Col} from "react-bootstrap"
import fantasy from "../books/fantasy.json"
import history from "../books/history.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import scifi from "../books/scifi.json"
import BookList from "./BookList"
import CommentArea from "./CommentArea"

class Books extends Component {
    state = {
        query: "",
        genre: "Fantasy",
        books: fantasy,
        selectedBook: ""
    }

    filterBookList= (e) => {
        this.setState({...this.state, query: e.target.value})
    }

    setSelectedBook = (asin) => {
        if (asin !== this.state.selectedBook) {
            this.setState({...this.state, selectedBook: asin})
        } else {
            this.setState({...this.state, selectedBook: ""})
        }
    }

    render() {
        return (
            <section>
                <div className="searchbar mb-4 pb-2">
                    <Container>
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
                </div>
                <Row className="books mx-2">
                    <Col xs={12} md={9}>
                        <BookList selectBook={this.setSelectedBook} selectedBook={this.state.selectedBook} genre={this.state.genre} books={this.state.books.filter(b => b.title.toLowerCase().includes(this.state.query))}/>
                    </Col>
                    <Col xs={12} md={3}>
                        <CommentArea id={this.state.selectedBook}></CommentArea>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default Books