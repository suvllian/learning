import React, { Component } from 'react' 
import ClickCounter from './../components/click-counter.jsx'

class App extends Component {
	render() {
		return (
      <div>
        <ClickCounter caption="First" initValue={10} />
        <ClickCounter caption="Second" initValue={0} />
        <ClickCounter caption="Third" initValue={5} />
      </div>
		)
	}
}