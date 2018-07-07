import React, {Component} from 'react';
import store from '../store/index';
import TodoListUI from './TodoListUI';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from '../store/actionCreator';


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

    render() {
        return (
            <TodoListUI
                list={this.state.list}
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                handleDelete={this.handleDelete}
            />
        )
    }
}