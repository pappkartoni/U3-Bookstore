import { Component } from "react";
import {Form, Button} from "react-bootstrap"

class AddComment extends Component {
    state = {
        comment: "",
        rate: "0",
    }

    postComment = async () => {
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzBmNmU3MzczODAwMTUzNzQzNzMiLCJpYXQiOjE2NzUzNDE1NzUsImV4cCI6MTY3NjU1MTE3NX0.WmNIWEtNArJGmqpfnbxs-o5HyEBAj95Z8nTAfVOr0_o",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({...this.state, elementId: this.props.asin})
            })

            if (res.ok) {
                this.setState({
                    comment: "",
                    rate: "0",
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <Form onSubmit={(e) => {
                e.preventDefault()
                this.postComment()
            }} onClick={(e) => e.stopPropagation()}>
                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control required type="text" placeholder="waddup..." value={this.state.comment} onChange={(e) => {this.setState({...this.state, comment: e.target.value})}} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control required type="number" min="0" max="5" placeholder="score" value={this.state.rate} onChange={(e) => {this.setState({...this.state, rate: e.target.value})}} />
                </Form.Group>
                <Button type="submit" variant="outline-dark">Submit</Button>
            </Form>
        )
    }
}

export default AddComment