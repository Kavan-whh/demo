import React, { Component } from 'react';

export default class top extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list : [1,2,3],
		};
	}
	render () {
    const li=this.state.list.map((item)=><li>{item}</li>);
		return (
  		// <ul>
      //   {li}
      // </ul>
			<div>
				我是搜素
			</div>
		)
	}
}
