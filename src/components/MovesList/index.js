import React, {Component} from 'react';
import { Avatar, List } from 'antd';
class MovesList extends Component {
    render() {
        return (
            <List
                loading={this.props.loading}
                itemLayout="horizontal"
                dataSource={this.props.moves}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar>{item.move.name.charAt(0)}</Avatar>}
                            title={item.move.name}
                            description={<a href={item.move.url}>{item.move.url}</a>}
                        />
                    </List.Item>
                )}
                pagination={{
                    pageSize: 10
                }}
            />
        )
    }
}


export default MovesList;
