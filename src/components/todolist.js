import React, {Component} from 'react';
import store from '../store/index';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from '../store/actionCreator';
import TodoListUI from './TodoListUI';


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
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                handleDelete={this.handleDelete}
            />
        )
    }
}