import React from 'react';
import $ from 'jquery';
import DetailSide from './detailside.jsx';
import ChatSide from './chatside.jsx';
export default class extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			curr_chat:"sabir ameen",
			chats:[
				{
					name:"sabir ameen",
					dp:"images/sb.jpg",
					msgs:[
						{
							author:"tom",
							text:"hi",
							time:"9.50PM"
						}
					]
				},
				{
					name:"Sreenath",
					dp:"images/sb.jpg",
					msgs:[
						{
							author:"tom",
							text:"hello",
							time:"9.50PM"
						}
					]
				},
				{
					name:"Anoop",
					dp:"images/sb.jpg",
					msgs:[
						{
							author:"tom",
							text:"hey",
							time:"9.50PM"
						}
					]
				}
			]
		}
	}
changeChat(chat){
	this.setState({curr_chat:chat})
}
addMsg(msg){
	let current = this.state.curr_chat
}
	render(){
		return(
			<div className="wrapper">
				<DetailSide data={this.state} changeChat={this.changeChat.bind(this)}/>
				<ChatSide data={this.state} addMsg={this.addMsg.bind(this)}/>
			</div>
		)
	}
}