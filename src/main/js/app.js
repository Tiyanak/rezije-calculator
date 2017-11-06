class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {vodas: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/vodas'}).done(response => {
            this.setState({vodas: response.entity._embedded.vodas});
        });
    }

    render() {
        return (
            <VodasList vodas={this.state.vodas}/>
        )
    }
}

class VodasList extends React.Component {
    render () {
        var vodas = this.props.vodas.map(voda =>
            <Voda key={voda._links.self.href} voda={voda}/>
        );

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Kucanstvo</th>
                        <th>Mjesec</th>
                        <th>Godina</th>
                    </tr>
                    {vodas}
                </tbody>
            </table>
        )
    }
}

class Voda extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.voda.kucanstvo}</td>
                <td>{this.props.voda.mjesec}</td>
                <td>{this.props.voda.godina}</td>
            </tr>
        )
    }
}

ReactDOM.render(
    <App/>
    document.getElementById('react')
)