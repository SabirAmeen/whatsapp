import React from 'react';
import $ from 'jquery';
import DetailSide from './detailside.jsx';
import ChatSide from './chatside.jsx';
export default class extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			curr_chat:"sabir ameen",
			curr_dp:"images/sb.jpg",
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
					dp:"images/lori.jpg",
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
				},
				{
					name:"finidi",
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
changeChat(chat,dp){
	this.setState({curr_chat:chat})
	console.log(dp)
	this.setState({curr_dp:dp})

}
addMsg(msg){
	let current = this.state.curr_chat;
	let chats=this.state.chats;
	chats=chats.map(function(item,index){
		if(item.name===current){
			item.msgs.push({
				author:"tom",
				text:msg,
				time:"9.50PM"
			})
			return item;
		}
		else{
			return item;
		}
	})
	this.setState({
		chats:chats
	})
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