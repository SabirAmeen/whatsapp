import React from 'react';
import $ from 'jquery';

export default class extends React.Component{

	render(){
		return(
			<div className="user-det">
				<img className="prof-pic" src={this.props.data.curr_dp}/>
				<strong className="chat-name chat-head">{this.props.data.curr_chat}</strong>
			</div>
		)
	}
}