import { Component } from "react"
import {Container, Row} from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {

    render() {
        return (
        <Container fluid>
            <h2>{this.props.genre}</h2>
            <Row>
                {this.props.books.map(b => {
                    return (
                        <SingleBook selectBook={() => {this.props.selectBook(b.asin)}} key={b.asin} book={b} selected={this.props.selectedBook}/>
                        )
                })}
            </Row>
        </Container>
        )
    }
}

export default BookList