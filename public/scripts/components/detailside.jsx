import React from 'react';
import $ from 'jquery';
import InfoHead from './infohead.jsx';
import Conversations from './conversations.jsx';
export default class extends React.Component{


	render(){
		return(
			<div className = "detail-side">
				<InfoHead/>
				<Conversations data={this.props.data} changeChat={this.props.changeChat}/>
			</div>
		)
	}

}