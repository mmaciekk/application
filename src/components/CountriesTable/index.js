import React, {Component} from 'react';
import { Table } from 'antd'
import './index.css';

class CountriesTable extends Component {
    state = {
        pageSize: 10,
        current: 1
    };

    componentWillMount () {
        this.setInitialConfiguration()
    }
    setInitialConfiguration () {
        let pageSize = localStorage.getItem('savedItemsPerPage');
        let current = localStorage.getItem('currentPage');
        if (pageSize) {
            pageSize = Number(pageSize)
            this.setState({pageSize})
        }
        if (current) {
            current = Number(current)
            this.setState({current})
        }
    }

    getColumns () {
        return [{
            title: 'Name',
            dataIndex: 'name'
        }, {
            title: 'Flag',
            dataIndex: 'flag',
            render: flag => <img className='flag' src={flag} alt='flag of this country' />
        }, {
            title: 'Capital',
            dataIndex: 'capital',
        }, {
            title: 'Area',
            dataIndex: 'area',
            render: area => `${area} km2`
        }]
    }
    handleOnShowSizeChange = (current, itemsPerPage) => {
        this.setState({
            pageSize: itemsPerPage
        });
        localStorage.setItem('savedItemsPerPage', itemsPerPage)
    };
    handleOnPageChange = (current) => {
        this.setState({
            current
        });
        localStorage.setItem('currentPage', current)
    };

    render() {
        return (
            <div>
                <Table
                    columns={this.getColumns()}
                    dataSource={this.props.items}
                    pagination={
                        {
                            showSizeChanger: true,
                            pageSize: this.state.pageSize,
                            current: this.state.current,
                            onShowSizeChange: this.handleOnShowSizeChange,
                            onChange: this.handleOnPageChange
                        }
                    }
                />            </div>
        )
    }
}


export default CountriesTable;
