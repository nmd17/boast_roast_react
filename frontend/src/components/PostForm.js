import React, { Component } from 'react'
import NavBar from './NavBar'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

class PostForm extends Component{
    constructor(){
        super();
        this.state = {
            body: '',
            type_of_post: 'Boast',
            upvotes: 0,
            downvotes: 0,

        }
    }

    bodyChange = event => {
        this.setState({
            body: event.target.value
        })
    }

    typeChange = event => {
        
        this.setState({
            type_of_post: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        axios.post("http://localhost:8000/api/posts/", {
            type_of_post: this.state.type_of_post,
            body: this.state.body,
            upvotes: this.state.upvotes,
            downvotes: this.state.downvotes
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }

    render(){
        return(
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
                <Form onSubmit={this.handleSubmit} style={{ border: '2px solid lightblue',borderRadius: '5px', padding: '10px', width: '300px'}}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Boast/Roast</Form.Label>
                    <Form.Control onChange={this.bodyChange} as="textarea" placeholder="write boast/roast here" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control onChange={this.typeChange } as="select">
                    <option>Boast</option>
                    <option>Roast</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </div>
            
        )
    }
}

export default PostForm