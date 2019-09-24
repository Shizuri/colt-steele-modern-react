function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Hello />
				<Hello />
				<Hello />
				<NumPicker />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
