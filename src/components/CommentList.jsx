import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import Comment from "./Comment"

class CommentList extends Component {
    render() {
        return (
            <ListGroup>
          {/* Create a connection between your DATA and your INTERFACE */}
          {/* 5) */}
          {
            // let's create as many ListGroup.Item as elements in the
            // reservations array
            this.props.comments.map((c) => {
              return <Comment key={c._id}cmt={c}/>
            })
            // this allows me from now on to focus just on the DATA,
            // the interface already knows how to behave!
          }
        </ListGroup>
        )
    }
}

export default CommentList