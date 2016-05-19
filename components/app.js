import React from 'react';
import Preview from './preview';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			post: {
				title: '',
				body: ''
			},
			style: {
				red: 0
			}
		}
	}
	render() {
		return (
			<div className="container">
				<label for="title">Title</label>
				<input id="title" type="text" value={ this.state.post.title } onChange={ this.handleChange.bind(this) } />
				<label for="body">Body</label>
				<textarea id="body" value={ this.state.post.body } onChange={ this.handleBodyChange.bind(this) } />
				<label for="color">Color</label>
				<input id="color" type="range" min={0} max={255}  value={ this.state.style.red } onChange={ this.handleRangeChange.bind(this) } />
				<Preview title={ this.state.post.title } red={ this.state.style.red } body={ this.state.post.body } />
			</div>
		);
	}
	handleChange(e) {
		const newTitle = e.target.value;
		this.setState({
			post: {
				title: newTitle,
				body: this.state.post.body
			}
		});
		console.log('is changing');
	}
	handleBodyChange(e){
		const newBody = e.target.value;
		this.setState({
			post: {
				title: this.state.post.title,
				body: newBody
			}
		});
	}
	handleRangeChange(e){
		const newRedValue = e.target.value;
		this.setState({
			style: {
				red: newRedValue
			}
		});
	}
}

export default App;