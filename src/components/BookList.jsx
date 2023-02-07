
import {Container, Row} from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList = (props) => {
    return (
    <Container fluid>
        <h2>{props.genre}</h2>
        <Row>
            {props.books.map(b => {
                return (
                    <SingleBook selectBook={() => {props.selectBook(b.asin)}} key={b.asin} book={b} selected={props.selectedBook}/>
                    )
            })}
        </Row>
    </Container>
    )
}

export default BookList