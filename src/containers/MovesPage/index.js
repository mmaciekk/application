import React, {Component} from 'react';
import axios from 'axios';
import MovesList from '../../components/MovesList';
import {message} from 'antd';

class MovesPage extends Component {
    state = {
        moves: [],
        loading: true
    }

    componentDidMount() {
        this.fetchDataFromApi()
    }

    fetchDataFromApi() {
        axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(response => {
                this.setState({
                    moves: response.data.moves
                })
            })
            .catch(error => {
                message.error(error.response.status + ' - ' + error.message)
            })
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <div>
                <MovesList moves={this.state.moves} loading={this.state.loading}/>
            </div>
        )
    }
}


export default MovesPage;
