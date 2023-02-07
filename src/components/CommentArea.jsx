import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import {Spinner, Alert, Container} from "react-bootstrap"

const CommentArea = (props) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const getComments = async () => {
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.id, {headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzBmNmU3MzczODAwMTUzNzQzNzMiLCJpYXQiOjE2NzUzNDE1NzUsImV4cCI6MTY3NjU1MTE3NX0.WmNIWEtNArJGmqpfnbxs-o5HyEBAj95Z8nTAfVOr0_o"
                }})
            if (res.ok) {
                const data = await res.json()
                setComments(data)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setHasError(true)
        }
    }

   useEffect(() => {
    getComments()}, // eslint-disable-next-line react-hooks/exhaustive-deps 
    []              // suddenly not so clean anymore
   )

    useEffect(() => {
        getComments()}, // eslint-disable-next-line react-hooks/exhaustive-deps 
        [props.id]
    )

    return (
    <Container className="commentarea">
            {isLoading && (
            <Spinner animation="border" variant="info" />
        )}
        {hasError && (
            <Alert variant="danger">You done fucked up</Alert>
        )}
            <h2>Comments</h2>
        {
            props.id   ? <div className="smallWrapper"> {comments.length ? <CommentList comments={comments} rerender={getComments}/>: <Alert variant="warning">No comments yet</Alert>}
                                <AddComment asin={props.id} rerender={getComments}/></div>
                            :   "Please select a book to see the comments."
        }
    </Container>
    )
}

export default CommentArea