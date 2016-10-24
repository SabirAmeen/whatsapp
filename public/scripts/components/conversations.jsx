import React from 'react';
import $ from 'jquery';

export default class extends React.Component{

	render(){
		return(
			<div className = "conversations">
				<div className="convstn-wrap">
					<div className="conv-image">
						<img className="prof-pic" src="images/sb.jpg"/>
					</div>
					<div className="conv-det">
						<strong className="chat-name">Sabir Ameen</strong>
						<span className="chat-time">9.40pm</span>
						<span className="chat-msg">Hloo</span>
					</div>
				</div>
				<div className="convstn-wrap">
					<div className="conv-image">
						<img className="prof-pic" src="images/sb.jpg"/>
					</div>
					<div className="conv-det">
						<strong className="chat-name">Sabir Ameen</strong>
						<span className="chat-time">9.40pm</span>
						<span className="chat-msg">Hloo</span>
					</div>
				</div>
				<div className="convstn-wrap">
					<div className="conv-image">
						<img className="prof-pic" src="images/sb.jpg"/>
					</div>
					<div className="conv-det">
						<strong className="chat-name">Sabir Ameen</strong>
						<span className="chat-time">9.40pm</span>
						<span className="chat-msg">Hloo</span>
					</div>
				</div>
			</div>
		)
	}
}