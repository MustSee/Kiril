import React, {Component} from 'react';

export default class Draw extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modeDessin: false,
			canvasWidth: "",
			canvasHeight: "",
			pageX : "",
			pageY : ""
		}
		
		this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
		this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
		this.handleOnMouseMove = this.handleOnMouseMove.bind(this);
		this.handleOnTouchStart = this.handleOnTouchStart.bind(this);
		this.handleOnTouchEnd = this.handleOnTouchEnd.bind(this);
		this.handleOnTouchMove = this.handleOnTouchMove.bind(this);
		this.handleOnDoubleClick = this.handleOnDoubleClick.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);
		this.cleanCanvas = this.cleanCanvas.bind(this);
	}

	updateDimensions() {
		const myCanvas = this.refs.myCanvas;
		const rect = myCanvas.getBoundingClientRect();
		this.setState({
			canvasWidth: rect.width,
			canvasHeight: rect.height
		});
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	componentWillReceiveProps() {
		this.cleanCanvas();
	}

	handleOnMouseDown() {
		this.setState({modeDessin: true})
	}

	handleOnMouseUp() {
		this.setState({modeDessin: false, pageX : "", pageY : ""})
	}

	handleOnMouseMove(e) {
		if (this.state.modeDessin) {
			const myCanvas = this.refs.myCanvas;
			const rect = myCanvas.getBoundingClientRect();
			const ctx = myCanvas.getContext("2d");

			if(this.state.pageX !== "") {
				ctx.beginPath();
				ctx.moveTo(this.state.pageX - rect.x, this.state.pageY - rect.y);
				ctx.lineTo(e.pageX - rect.x, e.pageY - rect.y);
				ctx.lineWidth = 10;
				ctx.stroke();
			}
			this.setState({pageX : e.pageX, pageY : e.pageY});
		}
	}

	handleOnTouchStart() {
		console.log('handleOnTouchStart');
		this.setState({modeDessin : true});
	}

	handleOnTouchEnd() {
		console.log('touchend');
		this.setState({modeDessin : false, pageX : "", pageY : ""});
	}

	handleOnTouchMove(e) {
		let pageX = e.touches[0].pageX;
		let pageY = e.touches[0].pageY;
		if (this.state.modeDessin) {
			const myCanvas = this.refs.myCanvas;
			const rect = myCanvas.getBoundingClientRect();
			const ctx = myCanvas.getContext("2d");
			// Nice line effect
			// ctx.beginPath();
			// ctx.moveTo(pageX - rect.x, pageY - rect.y);
			// ctx.lineTo(pageX - rect.x + 15, pageY - rect.y - 15);
			// ctx.lineWidth = 1;
			// ctx.stroke();

			// Basic circles
			// ctx.beginPath();
			// ctx.arc(pageX - rect.x, pageY - rect.y, 10, 0, 2 * Math.PI);
			// ctx.fillStyle = "black";
			// ctx.fill();

			if(this.state.pageX !== "") {
				ctx.beginPath();
				ctx.moveTo(this.state.pageX - rect.x, this.state.pageY - rect.y);
				ctx.lineTo(pageX - rect.x, pageY - rect.y);
				ctx.lineWidth = 10;
				ctx.stroke();
			}
			this.setState({pageX : pageX, pageY : pageY});
		}
	}

	handleOnDoubleClick() {
		this.cleanCanvas();
		this.props.incrementCounter();
	}

	cleanCanvas() {
		const myCanvas = this.refs.myCanvas;
		const ctx = myCanvas.getContext("2d");
		const rect = myCanvas.getBoundingClientRect();
		ctx.clearRect(0, 0, rect.width, rect.height)
	}

	render() {
		return (
			<div className="surroundingCanvas" ref="canvasDiv">
				<canvas height={this.state.canvasHeight} width={this.state.canvasWidth} ref="myCanvas"
								onMouseDown={this.handleOnMouseDown}
								onMouseUp={this.handleOnMouseUp}
								onMouseMove={this.handleOnMouseMove}
								onTouchStart={this.handleOnTouchStart}
								onTouchEnd={this.handleOnTouchEnd}
								onTouchMove={this.handleOnTouchMove}
								onDoubleClick={this.handleOnDoubleClick}
				>
				</canvas>
			</div>
		)
	}
}