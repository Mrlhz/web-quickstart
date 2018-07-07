import React, {Component} from 'react';
import {Input, Button, List} from 'antd';

export default class TodoListUI extends Component {
    opt = {
        size: 'large'
    };

    render() {
        const size = this.opt.size;
        return (
            <div style={{width: 960, margin: '0 auto'}}>
                <Input
                    placeholder="todo info"
                    value={this.props.inputValue}
                    size={size}
                    style={{width: 500, margin: '50px 0 0 50px'}}
                    onChange={this.props.handleInputChange}
                />
                <Button
                    type="primary"
                    size={size}
                    onClick={this.props.handleSubmit}
                >提交</Button>
                <List
                    style={{width: 500, margin: '10px 0 0 50px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={() => {this.props.handleDelete(index)}}>{item}
                        </List.Item>)}
                />
            </div>
        )
    }
}