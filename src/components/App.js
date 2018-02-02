import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'

class App extends Component {
  state: { counter: 0 }

  increment = () => {
    this.props.increment(1)
  }

  decrement = () => {
    this.props.decrement(2)
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
        <div className="panel panel-red">
          <div className="panel-heading  text-center">
            <h3 id="total">{this.props.counter}</h3>
          </div>

          <div className="panel-footer">
            <span
              id="up"
              className="btn btn-lg btn-block btn-info"
              onClick={this.increment}
            >
              UP
            </span>
            <span
              id="down"
              className="btn btn-lg btn-block btn-danger"
              onClick={this.decrement}
            >
              DOWN
            </span>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, { increment, decrement })(App)
