import React, { PropTypes, Component } from "react";
import { BRUSH, ERASER, STAMP } from "../constants/Tools";

let ctx;

export default class Canvas extends Component {
	constructor(props) {
		super(props);
		this.isDrawing = false;
		this.isStamping = false;
		this.start = this.start.bind(this);
		this.end = this.end.bind(this);
		this.draw = this.draw.bind(this);
		this.stamp = this.stamp.bind(this);
		this.reset = this.reset.bind(this);
	}

	componentDidMount() {
		this.refs.canvas.height = window.innerHeight;
		this.refs.canvas.width = window.innerWidth;
		ctx = this.refs.canvas.getContext("2d");
	}

	getStroke() {
		return this.props.tools.brush_size;
	}

	getColor() {
		return this.props.tools.brush_color;
	}

	getX(event) {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - this.refs.canvas.offsetLeft;
		}
		else {
			return event.pageX - this.refs.canvas.offsetLeft;
		}
	}

	getY(event) {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - this.refs.canvas.offsetTop;
		}
		else {
			return event.pageY - this.refs.canvas.offsetTop;
		}
	}

	start(event) {
		if (this.props.tools.tool === BRUSH || this.props.tools.tool === ERASER) {
			this.isDrawing = true;
			ctx.beginPath();
			ctx.moveTo(this.getX(event), this.getY(event));
			ctx.strokeStyle = this.getColor();
			event.preventDefault();
		} 

		if (this.props.tools.tool === ERASER) {
			ctx.strokeStyle = 'white';
		}
		if (this.props.tools.tool === STAMP) {
			this.isStamping = true;
			this.stamp();
		}
	}

	draw(event) {
		if (this.isDrawing) {
			ctx.lineTo(this.getX(event), this.getY(event));
			ctx.lineWidth = this.getStroke();
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			ctx.stroke();
		}
		event.preventDefault();
	}

	stamp(event) {
		let imageStamp = document.querySelector('.stamp-preview');
		let canvas = document.querySelector('.canvas');
		// change canvas width to make up for sidebar
			canvas.onclick = function(event){
            let x = event.clientX - imageStamp.height/2;
            let y = event.clientY - imageStamp.height/2;
            let dx = 100;
            let dy = 100;
            ctx.drawImage(imageStamp,x,y,dx,dy);
      };
	}

	end(event) {
		if (this.isDrawing) {
			ctx.stroke();
			ctx.closePath();
			this.isDrawing = false;
		}
		event.preventDefault();
	}

	reset(event) {
		ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
	}

	render() {
		return (
			<canvas
				className="canvas"
				ref="canvas"
				onMouseDown={ this.start }
				onMouseUp={ this.end }
				onMouseMove={ this.draw }
			></canvas>
		)
	}
}

Canvas.propTypes = {
	tools: PropTypes.object.isRequired
}