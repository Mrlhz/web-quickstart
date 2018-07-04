import React, {Component} from 'react';
import {Input, Button, List} from 'antd';
import store from '../store/index';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(this.state)
    }
    opt = {
        size: 'large'
    };

    render() {
        const size = this.opt.size;
        return (
            <div style={{width:960,margin: '0 auto'}}>
                <Input
                    placeholder="todo info"
                    value={this.state.inputValue}
                    readOnly
                    size={size}
                    style={{width: 500, margin: '50px 0 0 50px'}}
                />
                <Button
                    type="primary"
                    size={size}>提交</Button>
                <List
                    style={{width:500,margin: '10px 0 0 50px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}