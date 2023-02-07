import {Col, Card} from "react-bootstrap"

const SingleBook = (props) => {
    return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
        <Card onClick={props.selectBook} className={props.selected === props.book.asin ? "selected" : ""}>
            <div className="card-img-wrapper">
                <Card.Img variant="top" src={props.book.img} />
            </div>
            <Card.Body className="book-info">
                <Card.Title title={props.book.title}>{props.book.title}</Card.Title>
                <Card.Text className="d-flex justify-content-between">
                    <span className="text-capitalize text-muted">
                        {props.book.category}
                    </span>
                    <span className="text-danger">
                        {props.book.price.toFixed(2)}€
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default SingleBook