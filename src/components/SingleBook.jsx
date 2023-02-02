import {Component} from "react"
import {Col, Card} from "react-bootstrap"
import CommentArea from "./CommentArea"

class SingleBook extends Component {
    state = {selected: false}

    render() {
        return (
        <Col xs={6} md={4} lg={3} className="mb-3">
            <Card onClick={() => {this.setState({selected: !this.state.selected})}} className={this.state.selected ? "selected" : ""}>
                <div className="card-img-wrapper">
                    <Card.Img variant="top" src={this.props.book.img} />
                </div>
                <Card.Body className="book-info">
                    <Card.Title title={this.props.book.title}>{this.props.book.title}</Card.Title>
                    <Card.Text>
                    {this.props.book.category} - {this.props.book.price.toFixed(2)}€
                    </Card.Text>
                </Card.Body>
                {this.state.selected && <CommentArea id={this.props.book.asin}/>}
            </Card>
        </Col>
        )
    }
}

export default SingleBook