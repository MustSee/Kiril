import React, {Component} from 'react';
import Clear from 'material-ui/svg-icons/content/clear';
import Button from 'material-ui/FloatingActionButton';

let Tesseract = window.Tesseract;

export default class Draw extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modeDessin: false,
			canvasWidth: "",
			canvasHeight: "",
			pageX: "",
			pageY: "",
			image: "",
			idTimeOut: 0,
		};
		this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
		this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
		this.handleOnMouseMove = this.handleOnMouseMove.bind(this);
		this.handleOnTouchStart = this.handleOnTouchStart.bind(this);
		this.handleOnTouchEnd = this.handleOnTouchEnd.bind(this);
		this.handleOnTouchMove = this.handleOnTouchMove.bind(this);
		this.handleOnDoubleClick = this.handleOnDoubleClick.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);
		this.cleanCanvas = this.cleanCanvas.bind(this);
		this.checkCharacter = this.checkCharacter.bind(this);
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
		this.setState({modeDessin: false, pageX: "", pageY: ""})
	}

	handleOnMouseMove(e) {
		if (this.state.modeDessin) {
			const myCanvas = this.refs.myCanvas;
			const rect = myCanvas.getBoundingClientRect();
			const ctx = myCanvas.getContext("2d");

			if (this.state.pageX !== "") {
				ctx.beginPath();
				ctx.moveTo(this.state.pageX - rect.x, this.state.pageY - rect.y);
				ctx.lineTo(e.pageX - rect.x, e.pageY - rect.y);
				ctx.lineWidth = 10;
				ctx.stroke();
			}
			this.setState({pageX: e.pageX, pageY: e.pageY});
		}
	}

	handleOnTouchStart() {
		this.setState({modeDessin: true});
	}

	checkCharacter() {
		let letters = this.props.letter.uppercase + this.props.letter.lowercase;
		// In case the CDN doesn't work, we don't call Tesseract
		if(Tesseract) {
			Tesseract.recognize(this.state.image, {
				lang: 'bul',
				tessedit_char_whitelist: letters,
			})
				.then( result => {
					if(result.confidence > 60) {
						let idTimeOut = setTimeout(() => this.handleOnDoubleClick(), 300);
						this.setState({idTimeOut : idTimeOut});
					}
				});
		}
	}

	handleOnTouchEnd() {
		let canvas = this.refs.myCanvas;
		let image = canvas.getContext('2d');
		this.setState({modeDessin: false, pageX: "", pageY: "", image: image}, () => {
			this.checkCharacter();
		});
	}

	handleOnTouchMove(e) {
		let pageX = e.touches[0].pageX;
		let pageY = e.touches[0].pageY;
		if (this.state.modeDessin) {
			const myCanvas = this.refs.myCanvas;
			const rect = myCanvas.getBoundingClientRect();
			const ctx = myCanvas.getContext("2d");

			if (this.state.pageX !== "") {
				ctx.beginPath();
				ctx.moveTo(this.state.pageX - rect.x, this.state.pageY - rect.y);
				ctx.lineTo(pageX - rect.x, pageY - rect.y);
				ctx.lineWidth = 10;
				ctx.stroke();
			}
			this.setState({pageX: pageX, pageY: pageY});
		}
	}

	handleOnDoubleClick() {
		this.cleanCanvas();
		this.props.incrementCounter();
		if(this.state.idTimeOut !== 0) {
			clearTimeout(this.state.idTimeOut);
			this.setState({idTimeOut: ''})
		}
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
				/>
			  <div className="rubber">
				<Button mini={true} secondary={true} onClick={this.cleanCanvas}>
				<Clear/>
				</Button>
			  </div>
			</div>
		)
	}
}