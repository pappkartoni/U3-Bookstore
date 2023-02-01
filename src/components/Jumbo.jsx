import { Jumbotron, Container } from "react-bootstrap";
import jumboImage from "../jumbo.jpg"

const Jumbo = (props) => {
    return (
    <Jumbotron fluid>
        <Container>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </Container>
    </Jumbotron>
    )
}

export default Jumbo