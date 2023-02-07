import { ListGroup, Button } from "react-bootstrap";

const Comment = (props) => {
    const deleteComment = async () => {
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.cmt._id, {headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzBmNmU3MzczODAwMTUzNzQzNzMiLCJpYXQiOjE2NzUzNDE1NzUsImV4cCI6MTY3NjU1MTE3NX0.WmNIWEtNArJGmqpfnbxs-o5HyEBAj95Z8nTAfVOr0_o"
            },
            method: "DELETE"
            })
            if (res.ok) {
                props.rerender()
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <ListGroup.Item className="d-flex flex-column">
            <div className="d-flex align-items-center">
                <span className="font-weight-bold mr-1">{props.cmt.rate} / 5 </span>
                <Button className="ml-auto" variant="danger" onClick={(e) => {
                    e.stopPropagation()
                    deleteComment()
                }}>X</Button>
            </div>
            <span>{props.cmt.comment}</span>
        </ListGroup.Item>
    )
}

export default Comment