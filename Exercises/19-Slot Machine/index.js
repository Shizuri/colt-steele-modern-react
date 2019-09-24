class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Slot Machines!</h1>
				<Machine 
					first="🍇"
					second="🍒"
					third="🥥"
				/>
				<Machine 
					first="🥥"
					second="🥥"
					third="🥥"
				/>
				<Machine 
					first="🍒"
					second="🍇"
					third="🍒"
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
