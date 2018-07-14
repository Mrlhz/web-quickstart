import React, {Component} from 'react';
import {Input, Button, List} from 'antd';
import store from '../store/index';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from '../store/actionCreators';


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log("getState",this.state);
        console.log("store",store);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleSubmit() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleDelete(index) {
        console.log(index);
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    opt = {
        size: 'large'
    };

    render() {
        const size = this.opt.size;
        return (
            <div style={{width: 960, margin: '0 auto'}}>
                <Input
                    placeholder="todo info"
                    value={this.state.inputValue}
                    size={size}
                    style={{width: 500, margin: '50px 0 0 50px'}}
                    onChange={this.handleInputChange}
                />
                <Button
                    type="primary"
                    size={size}
                    onClick={this.handleSubmit}
                >提交</Button>
                <List
                    style={{width: 500, margin: '10px 0 0 50px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={this.handleDelete.bind(this, index)}
                        >{item}
                        </List.Item>)}
                />
            </div>
        )
    }
}