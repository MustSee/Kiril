import React, {Component} from 'react';

export default class Draw extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modeDessin : false,
			canvasWidth : "",
			canvasHeight : ""
		}
		this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
		this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
		this.handleOnMouseMove = this.handleOnMouseMove.bind(this);
		this.handleOnDoubleClick = this.handleOnDoubleClick.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);
	}

	updateDimensions() {
		const myCanvas = this.refs.myCanvas;
		const rect = myCanvas.getBoundingClientRect();
		this.setState({
			canvasWidth : rect.width,
			canvasHeight : rect.height
		});
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions)
	}

	handleOnMouseDown(e) {
		this.setState({modeDessin : true})
	}

	handleOnMouseUp(e) {
		this.setState({modeDessin : false})
	}

	handleOnMouseMove(e) {
		if(this.state.modeDessin) {

			const myCanvas = this.refs.myCanvas;
			const rect = myCanvas.getBoundingClientRect();
			const ctx = myCanvas.getContext("2d");
			ctx.beginPath();
			ctx.arc(e.pageX - rect.x, e.pageY - rect.y, 10, 0, 2*Math.PI);
			ctx.fillStyle = "red";
			ctx.fill();
		}
	}

	handleOnDoubleClick() {
		const myCanvas = this.refs.myCanvas;
		const ctx = myCanvas.getContext("2d");
		const rect = myCanvas.getBoundingClientRect();
		ctx.clearRect(0, 0, rect.width, rect.height)
		this.props.incrementCounter();
	}

	render() {
		return(
			<React.Fragment>
			<canvas height={this.state.canvasHeight} width={this.state.canvasWidth} ref="myCanvas"
				onMouseDown={this.handleOnMouseDown}
				onMouseUp={this.handleOnMouseUp}
				onMouseMove={this.handleOnMouseMove}
				onDoubleClick={this.handleOnDoubleClick}
			>
			</canvas>
			</React.Fragment>
		)
	}
}