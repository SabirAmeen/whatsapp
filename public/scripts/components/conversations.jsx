import React from 'react';
import $ from 'jquery';

export default class extends React.Component{
	render(){
		let list=this.props.data.chats;
		return(
			<div className = "conversations">
				{
					list.map(function(item,index){
						return(
							<div className="convstn-wrap"  onClick={()=>this.props.changeChat(item.name)} key={index}>
								<div className="conv-image">
									<img className="prof-pic" src={item.dp}/>
								</div>
								<div className="conv-det">
									<strong className="chat-name">{item.name}</strong>
									<span className="chat-time">{item.msgs[item.msgs.length-1].time}</span>
									<span className="chat-msg">{item.msgs[item.msgs.length-1].author}:{item.msgs[item.msgs.length-1].text}</span>
								</div>
							</div>

							)
					}.bind(this))
				}
			</div>
		)
	}
}