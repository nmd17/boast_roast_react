import React, {Component} from 'react'
import Post from './Post'
import axios from 'axios'

class Timeline extends Component{
    constructor(props){
        super(props)
        this.state = {
            postList: [],
            boastList: [],
            roastList: [],
            sortedList: []
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
              boastList: res.data.filter(post => {
                return post.type_of_post == 'Boast'
              }),
              roastList: res.data.filter(post => {
                return post.type_of_post == 'Roast'
              }),
              sortedList: res.data.sort((a, b) => {
                return a.upvotes < b.upvotes ? 1 : -1
              })
            })
          })
          .catch(err => console.log(err))
      }
    

    render(){
        const { postList, roastList, boastList, sortedList } = this.state
        const { mode } = this.props

        if(mode == 'standard'){
            return(
                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                { postList.map(post => (
                  <Post
                  refresh = {this.refreshList}
                  type={post.type_of_post}
                  body={post.body}
                  upvotes={post.upvotes}
                  downvotes={post.downvotes}
                  created={post.created_at}
                  id={post.id}
                  refresh={this.refreshList}/>
                ))}
              </div> 
            )
        }else if(mode == 'roast'){
            return(
                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                { roastList.map(post => (
                  <Post
                  refresh = {this.refreshList}
                  type={post.type_of_post}
                  body={post.body}
                  upvotes={post.upvotes}
                  downvotes={post.downvotes}
                  created={post.created_at}
                  id={post.id}
                  refresh={this.refreshList}/>
                ))}
              </div> 
            )
        }else if(mode == 'boast'){
            return(
                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                { boastList.map(post => (
                  <Post
                  refresh = {this.refreshList}
                  type={post.type_of_post}
                  body={post.body}
                  upvotes={post.upvotes}
                  downvotes={post.downvotes}
                  created={post.created_at}
                  id={post.id}
                  refresh={this.refreshList}/>
                ))}
              </div> 
            )
        }else if(mode == 'sorted'){
            return(
                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                { sortedList.map(post => (
                  <Post
                  refresh = {this.refreshList}
                  type={post.type_of_post}
                  body={post.body}
                  upvotes={post.upvotes}
                  downvotes={post.downvotes}
                  created={post.created_at}
                  id={post.id}
                  refresh={this.refreshList}/>
                ))}
              </div> 
            )
        }
    }
}

export default Timeline