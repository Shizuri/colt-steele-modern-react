class Hello extends React.Component {
    render() {
        console.log(this.props);
        const bangs = "!".repeat(this.props.bangs);
        return (
            <div>
                <p>Hello {this.props.to} from {this.props.from}{bangs}</p>
                <img src={this.props.img} />
            </div>
        );
    }
}