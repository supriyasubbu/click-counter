// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(previousState => {
      console.log(`previous state value ${previousState.count}`)
      return {count: previousState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="heading">
            The Button has been clicked
            <br /> <span className="counter">{count}</span> times
          </h1>
          <p className="description">Click the button to increase the count</p>
          <div className="button-container">
            <button type="button" className="button" onClick={this.onIncrement}>
              Click Me
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ClickCounter
