import { ListGroup } from "react-bootstrap";
import Comment from "./Comment"

const CommentList = (props) => {
    return (
        <ListGroup>
        {props.comments.map((c) => {
            return <Comment key={c._id} cmt={c} rerender={props.rerender}/>
        })
        }
    </ListGroup>
    )
}

export default CommentList