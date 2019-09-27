import React, {Component} from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Post extends Component{
    constructor(props){
        super(props)
        this.state = {
            showPopup: false
        }
    }

    downvote = id => {
        axios.get(`http://localhost:8000/api/posts/${id}/`)
        .then(res => {
            axios.put(`http://localhost:8000/api/posts/${id}/`, {
                downvotes: res.data.downvotes += 1,
                body: res.data.body
            })

            this.props.refresh()   
        })
    }

    upvote = id => {
        axios.get(`http://localhost:8000/api/posts/${id}/`)
        .then(res => {
            axios.put(`http://localhost:8000/api/posts/${id}/`, {
                upvotes: res.data.upvotes += 1,
                body: res.data.body
            })

            this.props.refresh()
            
        })
    }
    
    render(){
        const { id, downvotes, upvotes, body, type, created} = this.props

        return(
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{type}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Card.Subtitle>{created}</Card.Subtitle>
                    <br/>
                    <Button onClick={() => this.upvote(id)}>Upvote</Button><span> {upvotes}</span>
                    <Button className='btn btn-danger' onClick={() => this.downvote(id)}>Downvote</Button><span> {downvotes}</span>    
                </Card.Body>
            </Card>
        )
    }
}

export default Post