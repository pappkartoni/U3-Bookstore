import {Component} from "react"
import {Container, Row, Button, Form, Col} from "react-bootstrap"
import fantasy from "../books/fantasy.json"
import history from "../books/history.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import scifi from "../books/scifi.json"
import SingleBook from "./SingleBook"

class Books extends Component {
    state = {
        query: "",
        genre: "Fantasy",
        books: fantasy
    }

    filterBookList= (e) => {
        this.setState({...this.state, query: e.target.value})
       /*  , books:  this.state.books.filter(b => {return b.title.includes(e.target.value)}) */
    }

    render() {
        return (
            <section>
                <Container className="mb-4">
                    <Row className="mb-3">
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({query: "", genre: "Fantasy", books: fantasy})}}>Fantasy</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({query: "", genre: "History", books: history})}}>History</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({query: "", genre: "Horror", books: horror})}}>Horror</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({query: "", genre: "Romance", books: romance})}}>Romance</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({query: "", genre: "Scifi", books: scifi})}}>Scifi</Button>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Search..." onChange={this.filterBookList} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h2>{this.state.genre}</h2>
                    <Row>
                        {this.state.books.map(b => {
                            return (
                                b.title.toLowerCase().includes(this.state.query) && <SingleBook book={b} />
                                )
                        })}
                    </Row>
                </Container>
                {/* <Col key={b.asin} xs={6} md={4} lg={3} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src={b.img} />
                        <Card.Body>
                            <Card.Title title={b.title}>{b.title}</Card.Title>
                            <Card.Text>
                            {b.category} - {b.price.toFixed(2)}€
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}
            </section>
        )
    }
}

export default Books