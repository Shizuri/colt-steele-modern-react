function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if(num === 7){
			msg = 
			<div>
				<h2>CONGRATS YOU WIN!</h2>
				<img src="https://media.giphy.com/media/oGOW75SleZPR6/giphy.gif" />
			</div>
		} else {
			msg = <p>Sorry, you lose.</p>
		}
		return (
			<div>
				<h1>Your number is {num}</h1>
				<p>{num === 7 ? 'Congrats!' : 'Unlucky'}</p>
				{
					num === 7
						? <img src="https://media.giphy.com/media/oGOW75SleZPR6/giphy.gif" />
						: null
				}
				{num === 7 && <img src="https://media.giphy.com/media/oGOW75SleZPR6/giphy.gif" />}
				{msg}
			</div>
		);
	}
}