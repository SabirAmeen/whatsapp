import React from 'react';
import $ from 'jquery';

export default class extends React.Component{
enter(ele){
	console.log(event)
	if(event.keyCode==13){
		this.props.addMsg(ele.value)
		console.log("hi")
	}
}
	render(){
		return(
			<div className="chat-input">
				<img src="images/emoticon.png"/>
				<input className="chat-field" type="text" onKeyDown={()=>this.enter(this)}/>
				<img src="images/mic.png"/>
			</div>
		)
	}
}