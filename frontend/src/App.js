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
      sortedList: [],
      roasts: false,
      boasts: false,
      sorted: false
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
          }),
          boastList: res.data.filter(post => {
            return post.type_of_post == 'Boast'
          }),
          sortedList: res.data.sort((a,b) => (a.upvotes < b.upvotes) ? 1 : -1)
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    const { postList, roastList, boastList, sortedList } = this.state

    if(!this.state.roasts && !this.state.boasts && !this.state.sorted){
      return (
        <div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button onClick={() => {
              this.setState({
                roasts: false,
                boasts: false,
                sorted: false
              })
            }}>Show only Roasts</Button>
            <Button onClick={() => {
              this.setState({
                roasts: false,
                boasts: false,
                sorted: false
              })
            }}>Show only Boasts</Button>
            <Button onClick={() => {
              this.setState({
                roasts: false,
                boasts: false,
                sorted: false
              })
            }}>Show most highly voted posts</Button>
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
    }else if(this.state.roasts){
      return (
        <div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button onClick={() => {
              this.setState({
                roasts: true,
                boasts: false,
                sorted: false
              })
            }}>Show only Roasts</Button>
            <Button onClick={() => {
              this.setState({
                roasts: false,
                boasts: true,
                sorted: false
              })
            }}>Show only Boasts</Button>
            <Button onClick={() => {
              this.setState({
                roasts: false,
                boasts: false,
                sorted: true
              })
            }}>Show most highly voted posts</Button>
          </div>
          <br/>
          <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            { roastList.map(post => (
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
    }else if(this.state.boasts){
      return (
        <div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button onClick={() => {
              this.setState({
                roasts: true,
                boasts: false,
                sorted: false
              })
            }}>Show only Roasts</Button>
            <Button onClick={() => {
              this.setState({
                roasts: false,
                boasts: true,
                sorted: false
              })
            }}>Show only Boasts</Button>
            <Button onClick={() => {
              this.setState({
                roasts: false,
                boasts: false,
                sorted: true
              })
            }}>Show most highly voted posts</Button>
          </div>
          <br/>
          <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            { boastList.map(post => (
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
    }else if(this.state.sorted){
      return (
        <div>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button onClick={() => {
              this.setState({
                roasts: true,
                boasts: false,
                sorted: false
              })
            }}>Show only Roasts</Button>
            <Button onClick={() => {
              this.setState({
                roasts: false,
                boasts: true,
                sorted: false
              })
            }}>Show only Boasts</Button>
            <Button onClick={() => {
              this.setState({
                roasts: false,
                boasts: false,
                sorted: true
              })
            }}>Show most highly voted posts</Button>
          </div>
          <br/>
          <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            { sortedList.map(post => (
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
  
    
}

export default App;
