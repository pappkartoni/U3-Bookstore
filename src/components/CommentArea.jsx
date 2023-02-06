import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import {Spinner, Alert, Container} from "react-bootstrap"

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
            }
        } catch (error) {
            console.log(error)
            this.setState({isLoading: false, hasError: true})
        }
    }

    componentDidMount() {
        this.getComments()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id !== this.props.id) {
            this.getComments()
        }
    }

    render() {
        return (
        <Container className="commentarea">
             {this.state.isLoading && (
                <Spinner animation="border" variant="info" />
            )}
            {this.state.hasError && (
                <Alert variant="danger">You done fucked up</Alert>
            )}
                <h2>Comments</h2>
            {
                this.props.id   ? <> {this.state.comments.length ? <CommentList comments={this.state.comments}/>: <Alert variant="warning">No comments yet</Alert>}
                                    <AddComment asin={this.props.id} rerender={this.getComments}/></>
                                :   "Please select a book to see the comments."
            }
        </Container>
        )
    }
}

export default CommentArea