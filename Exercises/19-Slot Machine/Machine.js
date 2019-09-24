class Machine extends React.Component{
    render(){
        let winner = <p>You lose</p>;
        if(this.props.first === this.props.second && this.props.second === this.props.third){
            winner = <p>You win!</p>;
        }
        return(
            <div>
                {this.props.first} {this.props.second} {this.props.third}
                {winner}
            </div>
        )
    }
}