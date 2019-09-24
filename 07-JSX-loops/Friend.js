class Friend extends React.Component {
    render() {
        const {name, hobbies} = this.props;
        console.log(name);
        console.log(hobbies);

        return (
            <div>
                <h1>{name}</h1>
                <p>Hobbies:</p>
                <ul>
                    {hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
            </div>
        );
    }
}