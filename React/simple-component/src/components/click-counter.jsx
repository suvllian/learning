import React, { Component } from 'react'

class ClickCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: props.ininValue || 0
		}
		this.onClickButton = this.onClickButton.bind(this)
	}

	onClickButton() {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
    const { count } = this.state
    const { caption } = this.props

		return (
      <div>
        <button onClick={this.onClickButton}>Click Me</button>
        <p>caption: {count}</p>
      </div>
		)
	}
}

export default ClickCounter