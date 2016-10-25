import React from 'react';
import $ from 'jquery';
import ChatHead from './chathead.jsx';
import Chats from './chats.jsx';
import ChatInput from './chatinput.jsx';
export default class extends React.Component{

	render(){
		return(
			<div className="chat-side">
				<ChatHead data={this.props.data}/>
				<Chats data={this.props.data}/>
				<ChatInput addMsg={this.props.addMsg}/>
			</div>
		)
	}
}