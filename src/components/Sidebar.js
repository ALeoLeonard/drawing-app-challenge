import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import BrushColor from "./BrushColor";
import ImageStamp from "./ImageStamp";
import Reset from "./Reset";
import Save from "./Save";

export default class Sidebar extends Component {

	render() {
		const { tools, actions } = this.props;
		const { brush_size, brush_color, image } = tools;
		return (
			<div className="sidebar">
				<section className="section section--tool-selector">
					<h3 className="section__heading">Tool</h3>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
					/>
				</section>

				<section className="section section--brush-size">
					<h3 className="section__heading">Brush Size</h3>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
					/>
				</section>

				<section className="section section--brush-color">
					<h3 className="section__heading">Brush Color</h3>
					<BrushColor
						brush_color={ brush_color }
						action={ actions.changeColor }
					/>
				</section>

				<section className="section section--image-stamp">
					<h3 className="section__heading">Image Stamp</h3>
					<ImageStamp
						image={ image }
					/>
				</section>

				<section className="section section--image-stamp">
					<h3 className="section__heading">Reset Canvas</h3>
					<Reset />
				</section>

				<section className="section section--image-stamp">
					<h3 className="section__heading">Save Canvas</h3>
					<Save />
				</section>
			</div>
		)
	}
}
