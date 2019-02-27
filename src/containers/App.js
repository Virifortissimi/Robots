import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(user => this.setState({robots: user }) )
    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value})
    }
    render () {
        const { robots, searchField } = this.state;

        const filteredArray = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        })
        return !robots.length ?
             <h1>LOADING</h1> :
             (
                <div className='tc'>
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredArray} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;