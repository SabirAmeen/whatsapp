import React from 'react';
import $ from 'jquery';
import NativeListener from 'react-native-listener';

export default class extends React.Component{
constructor(props){
	super(props);
	this.node = undefined;
}
enter(){
	console.log(event.keyCode)
	if(event.keyCode==13){
		this.props.addMsg(this.node.value)
		this.node.value=""
	}
}
	render(){
		return(
			<div className="chat-input">
				<img src="images/emoticon.png"/>
				<NativeListener onKeyDown={this.enter.bind(this)}>
					<input className="chat-field" type="text" ref={node => this.node = node}  />
 				</NativeListener>
				<img src="images/mic.png" />
			</div>
		)
	}
}