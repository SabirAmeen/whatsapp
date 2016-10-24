import React from 'react';
import $ from 'jquery';

export default class extends React.Component{

	render(){
		return(
			<div className="details-head">
				<div className="user-det">
					<img className="prof-pic" src="images/1136.jpg"/>
					<img className="icons user-icon" src="images/vert-icon.png"/>
					<img className="icons user-icon" src="images/msg-icon.png"/>
				</div>
				<input className = "user-search" type="text" placeholder = "Search or start new chat"/>
			</div>
		)
	}
}