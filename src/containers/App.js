import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            friends: [],
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users => this.setState({ friends: users }))
    }

    render() {
        const { friends, searchfield } = this.state;

        const filteredFriends = friends.filter(friend => {
            return friend.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if(!friends.length){
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Find Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList friends={filteredFriends}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;