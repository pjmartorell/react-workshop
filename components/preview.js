import React from 'react';

class Preview extends React.Component {
	render() {
		const title = this.props.title;
		const red = this.props.red;
		const body = this.props.body;
		const color = `rgb(${red},255,0)`;
		const myStyle = {
			backgroundColor: color
		};
		return (
			<div style={ myStyle } >
				<p>{ title }</p>
				<p>{ body }</p>
				<p>{ red }</p>
			</div>
		);
	}
}

export default Preview;