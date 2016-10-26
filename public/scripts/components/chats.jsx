import React from 'react';
import $ from 'jquery';

export default class extends React.Component{

	render(){
		let chatData = this.props.data.chats;
		let current = this.props.data.curr_chat;
		let list=chatData.filter(function(item,index){
			return item.name===current
			
		})
		let arr = list[0].msgs;
		return(
			<div className="chats">
				{
					arr.map(function(item,index){
						return(
							<span className="chat-data" key={index}>
    							<span className="mdl-chip__text .msg">{item.text} </span>
							</span>
							)
					})
				}
			</div>
		)
	}
}