import {Component} from "react"
import {Col, Card} from "react-bootstrap"

class SingleBook extends Component {
    state = {selected: false}

    render() {
        return (
        <Col key={this.props.book.asin} xs={6} md={4} lg={3} className="mb-3">
            <Card onClick={() => {this.setState({selected: !this.state.selected})}} className={this.state.selected ? "selected" : ""}>
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title title={this.props.book.title}>{this.props.book.title}</Card.Title>
                    <Card.Text>
                    {this.props.book.category} - {this.props.book.price.toFixed(2)}€
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        )
    }
}

export default SingleBook