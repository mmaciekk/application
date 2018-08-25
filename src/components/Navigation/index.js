import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    state = {
        current: '0',
    };
    handleClick = (e) => {
        console.log('click', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="0">
                    <Link to='/'>
                        <Icon type="global"/>Countries
                    </Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to='/moves'>
                        <Icon type="sync"/>Pokémon Moves
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/jokes'>
                        <Icon type="smile-o"/>Chuck Norris Jokes
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;