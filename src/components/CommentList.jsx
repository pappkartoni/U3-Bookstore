import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import Comment from "./Comment"

class CommentList extends Component {
    render() {
        return (
            <ListGroup>
            {this.props.comments.map((c) => {
                return <Comment key={c._id} cmt={c} rerender={this.props.rerender}/>
            })
            }
        </ListGroup>
        )
    }
}

export default CommentList