class Machine extends React.Component {
    render() {
        const { first, second, third } = this.props;
        const winner = first === second && second === third;
        const colors = {fontSize: '50px', backgroundColor: 'purple'};

        return (
            <div className="Machine">
                <p style={colors}>
                    {first} {second} {third}
                </p>
                <p className={winner ? 'win' : 'lose'}>{winner ? 'You win!' : 'You lose'}</p>
            </div>
        )
    }
}