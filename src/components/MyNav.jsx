import {Navbar, Nav} from "react-bootstrap"

const MyNav = (props) => {
    const items = props.navitems
    return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {props.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {items.map(item => {
                return  <Nav.Link key={item} href="#">{item}</Nav.Link>
            })}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default MyNav