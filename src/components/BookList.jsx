import { Component } from "react"
import {Container, Row} from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {

    render() {
        return (
        <Container>
            <h2>{this.props.genre}</h2>
            <Row>
                {this.props.books.map(b => {
                    return (
                        <SingleBook book={b} />
                        )
                })}
            </Row>
        </Container>
        )
    }
}

export default BookList