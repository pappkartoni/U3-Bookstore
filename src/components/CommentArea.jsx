import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import {Spinner, Alert, Card} from "react-bootstrap"

class CommentArea extends Component {
    state = {
        comments: [],
        isLoading: true,
        hasError: false
    }

    getComments = async () => {
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzBmNmU3MzczODAwMTUzNzQzNzMiLCJpYXQiOjE2NzUzNDE1NzUsImV4cCI6MTY3NjU1MTE3NX0.WmNIWEtNArJGmqpfnbxs-o5HyEBAj95Z8nTAfVOr0_o"
                }})
            if (res.ok) {
                const data = await res.json()
                this.setState({comments: data, isLoading: false})
                console.log(data)
            }
        } catch (error) {
            console.log(error)
            this.setState({isLoading: false, hasError: true})
        }
    }

    componentDidMount() {
        console.log("commentarea mounted")
        this.getComments()
    }

    render() {
        console.log("commentarea render")
        return (
        <Card.Body>
             {this.state.isLoading && (
                <Spinner animation="border" variant="success" />
            )}
            {this.state.hasError && (
                <Alert variant="danger">Aww snap, we got an error!😨</Alert>
            )}
            <CommentList comments={this.state.comments}/>
            <AddComment asin={this.props.id}/>
        </Card.Body>
        )
    }
}

export default CommentArea