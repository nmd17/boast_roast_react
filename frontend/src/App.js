import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import Timeline from './components/Timeline'


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      mode: 'standard'
    };
  }

  changeMode = (mode) => {
      this.setState({
        mode: `${mode}`
      })
  }

  render(){
    const { mode } = this.state

    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button onClick={() => this.changeMode('roast')}>Show only Roasts</Button>
          <Button onClick={() => this.changeMode('boast')}>Show only Boasts</Button>
          <Button onClick={() => this.changeMode('sorted')}>Show most highly voted posts</Button>
        </div>
        <br/>
        <div>
          <Timeline mode={mode}/>
        </div>
      </div>
    )
  }
  
    
}

export default App;
