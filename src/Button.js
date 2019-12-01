import React from 'react';
import './Button.css';

class Button extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			active: false,
			deltaX: 0,
			deltaY: 0
		};
		this.myRef = React.createRef();
	}
	x(event){
		let {x, y} = this.myRef.current.getBoundingClientRect();
		let {clientX, clientY} = event;
		let deltaX = clientX - x -5;
		let deltaY = clientY - y -5;
		this.setState({
			active: true,
			deltaX: deltaX,
			deltaY: deltaY	
		})
	}
	y(){
		this.setState({
			active: false
		})
	}
	render(){
		return (
			<button className="btn1" ref={this.myRef} onClick={this.x.bind(this)}>
				<span className="value">{this.props.value}</span>
				{this.state.active === true ? <span className="dot"
							onAnimationEnd={this.y.bind(this)}
							style={{ left: this.state.deltaX, top: this.state.deltaY}}></span> : ''}
			</button>
		)
	}
};

export default Button;
