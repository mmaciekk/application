import React, {Component} from 'react';
import {Card} from 'antd';

const {Meta} = Card;

class JokesCard extends Component {
    render() {
        return (
            <Card
                hoverable
                style={{ margin: '0 auto', width: 400 }}
                cover={<img style={{width: 400}} alt='Chuck Norris face' src={this.props.joke.icon_url} />}
            >
                <Meta
                    title={this.props.joke.url}
                    description={this.props.joke.value}
                />
            </Card>
        )
    }
}


export default JokesCard;
