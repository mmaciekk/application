import React, {Component} from 'react';
import JokesCard from '../../components/JokesCard';
import {message, Button} from 'antd/lib/index'
import axios from 'axios/index'
import './index.css';

class JokesPage extends Component {
    state = {
        joke: {}
    }
    componentDidMount () {
        this.fetchDataFromApi ()
    }

    fetchDataFromApi () {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => {
                this.setState({
                    joke: response.data
                })
            })
            .catch(error => {
                message.error(error.response.status + ' - ' + error.message)
            })
    }
    fetchNewJoke = () => {
        this.fetchDataFromApi()
    }

    render() {
        return (
            <div>
                <JokesCard joke={this.state.joke}/>
                <Button className="amuse" type="primary" icon="smile-o" onClick={this.fetchNewJoke}>Amuse me</Button>
            </div>
        )
    }
}


export default JokesPage;
