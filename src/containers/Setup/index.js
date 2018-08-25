import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Content from '../../components/Content';
import CountriesPage from '../CountriesPage';
import JokesPage from '../JokesPage';
import MovesPage from '../MovesPage';

class Setup extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
                        <Content>
                            <Route exact path='/' component={CountriesPage}/>
                            <Route exact path='/moves' component={MovesPage}/>
                            <Route exact path='/jokes' component={JokesPage}/>
                        </Content>
                </div>
            </Router>
        )
    }
}


export default Setup;