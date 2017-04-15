import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '~/actions/counter'

function mapStateToProps(state) {
  const { count } = state.counterReducer
  return { count }
}

class Entry extends React.Component {
  constructor(props) {
    super(props)
    this.addOne = this.addOne.bind(this)
    this.subOne = this.subOne.bind(this)
  }
  addOne() {
    const { dispatch } = this.props
    dispatch(increment())
  }
  subOne() {
    const { dispatch } = this.props
    dispatch(decrement())
  }
  render() {
    const { count } = this.props
    return (
      <div>
        <h1>count is: {count}</h1>
        <h2>hahahaha</h2>
        <h1 onClick={this.addOne}>+1</h1>
        <h1 onClick={this.subOne}>-1</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Entry)


