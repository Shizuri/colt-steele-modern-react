class App extends React.Component {
	render() {
		return (
			<div>
				<Hello
					to="Ringo"
					from="Paul"
					bangs={4}
					img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/200px-Rotating_earth_%28large%29.gif"
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));