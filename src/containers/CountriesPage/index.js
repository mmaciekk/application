import React, {Component} from 'react';
import CountriesTable from '../../components/CountriesTable';
import {message} from 'antd/lib/index';
import axios from 'axios/index';

class CountriesPage extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.fetchDataFromApi()
    }

    fetchDataFromApi() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log(response)
                this.setState({
                    items: response.data
                })
            })
            .catch(error => {
                message.error(error.response.status + ' - ' + error.message)
            })
    }


    render() {
        return (
            <CountriesTable items={this.state.items}/>
        )
    }
}


export default CountriesPage;
