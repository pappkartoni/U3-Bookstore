import {Container, Row} from "react-bootstrap"

const MyFooter = (props) => {
    return (
    <footer className="bg-dark">
        <Container fluid>
            <Row className="text-center justify-content-center text-white">
                <a className="copyright" href="https://github.com/pappkartoni/">Copyright: {props.author}</a>
            </Row>
        </Container>
    </footer>
    )
}

export default MyFooter