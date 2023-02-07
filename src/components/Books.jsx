import {useState} from "react"
import {Container, Row, Button, Form, Col} from "react-bootstrap"
import fantasy from "../books/fantasy.json"
import history from "../books/history.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import scifi from "../books/scifi.json"
import BookList from "./BookList"
import CommentArea from "./CommentArea"

const Books = (props) => {
    const [query, setQuery] = useState("")
    const [genre, setGenre] = useState("Fantasy")
    const [books, setBooks] = useState(fantasy)
    const [selectedBook, setSelectedBook] = useState("")

    const filterBookList= (e) => {
        setQuery(e.target.value)
    }


    const setSelectedBookToggle = (asin) => {
        if (asin !== selectedBook) {
            setSelectedBook(asin)
        } else {
            setSelectedBook("")
        }
    }

    return (
        <section>
            <div className="searchbar mb-4 pb-2">
                <Container>
                    <Row className="mb-3">
                        <Button className="mx-3" variant="outline-dark" onClick={() => {setGenre("Fantasy"); setBooks(fantasy)}}>Fantasy</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {setGenre("History"); setBooks(history)}}>History</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {setGenre("Horror"); setBooks(horror)}}>Horror</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {setGenre("Romance"); setBooks(romance)}}>Romance</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {setGenre("Scifi"); setBooks(scifi)}}>Scifi</Button>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Search..." onChange={filterBookList} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Row className="books mx-2">
                <Col xs={12} md={9}>
                    <BookList selectBook={setSelectedBookToggle} selectedBook={selectedBook} genre={genre} books={books.filter(b => b.title.toLowerCase().includes(query))}/>
                </Col>
                <Col xs={12} md={3}>
                    <CommentArea id={selectedBook}></CommentArea>
                </Col>
            </Row>
        </section>
    )
}

export default Books