import  { useState } from "react"
import { Form, Button } from "react-bootstrap"

const AddComment = (props) => {
    const [commentBody, setCommentBody] = useState({comment: "", rate: "1"})

    const postComment = async () => {
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzBmNmU3MzczODAwMTUzNzQzNzMiLCJpYXQiOjE2NzUzNDE1NzUsImV4cCI6MTY3NjU1MTE3NX0.WmNIWEtNArJGmqpfnbxs-o5HyEBAj95Z8nTAfVOr0_o",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({...commentBody, elementId: props.asin})
            })

            if (res.ok) {
                setCommentBody({
                    comment: "",
                    rate: "1",
                })
                props.rerender()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            postComment()
        }} onClick={(e) => e.stopPropagation()}>
            <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control required type="text" placeholder="waddup..." value={commentBody.comment} onChange={(e) => {setCommentBody({...commentBody, comment: e.target.value})}} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control required type="number" min="1" max="5" placeholder="score" value={commentBody.rate} onChange={(e) => {setCommentBody({...commentBody, rate: e.target.value})}} />
            </Form.Group>
            <Button type="submit" variant="outline-dark">Submit</Button>
        </Form>
    )
}

export default AddComment