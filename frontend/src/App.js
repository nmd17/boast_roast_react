import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios'
import Post from './components/Post'
import { Button } from 'react-bootstrap'


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      roastList: [],
      boastList: [],
      roasts: false,
      boasts: false
    };
  }

  componentDidMount(){
    this.refreshList()
  }

  refreshList = () => {
    axios
      .get("/api/posts")
      .then(res => {
        this.setState({
          postList: res.data,
          roastList: res.data.filter(post => {
            return post.type_of_post == 'Roast'
          })
        
        
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    const { postList } = this.state

    const tempList = this.state.postList
    console.log(postList)
    console.log(tempList)

    const roastsOnly = postList.filter(post => {
      return post.type_of_post == 'Roast'
    })

    const boastsOnly = postList.filter(post => {
      return post.type_of_post == 'Boast'
    })

    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button>Show only Roasts</Button>
          <Button>Show only Boasts</Button>
          <Button>Show most highly voted posts</Button>
        </div>
        <br/>
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          { postList.map(post => (
            <Post
            type={post.type_of_post}
            body={post.body}
            upvotes={post.upvotes}
            downvotes={post.downvotes}
            created={post.created_at}
            id={post.id}
            refresh={this.refreshList}/>
          ))}
        </div>
      </div>
    )
  }
  
    
}

export default App;
