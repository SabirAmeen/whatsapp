import React from 'react';
import $ from 'jquery';
import DetailSide from './detailside.jsx';
import ChatSide from './chatside.jsx';
export default class extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="wrapper">
				<DetailSide/>
				<ChatSide/>
			</div>
		)
	}
}