import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class myMain extends Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div> Hello from react </div>
			);
	}
}

ReactDOM.render(<myMain />, document.getElementById('myApp'));