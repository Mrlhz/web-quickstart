import React, {Fragment} from 'react';
import {List} from 'antd-mobile';
import {Input} from 'antd';
import 'antd/dist/antd.css';
import TodoItem from './item';

class Lists extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            lists: ['dva', 'react', 'antd design pro', 'value => console.log(value)']
        }
    }

    handleInputChange_(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(()=>({
            inputValue: value
        }))
    }

    handleClick_() {
        this.setState({
            lists: [...this.state.lists, this.state.inputValue],
            inputValue: ''
        })
    }

    handleClick(e) {
        if(!this.state.inputValue.length){
            return;
        }
        this.setState((prevState)=>({
            lists:[...prevState.lists, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleItemDelete(index) {
        //    immutable
        const list = [...this.state.lists];
        list.splice(index, 1);
        this.setState({
            lists: list
        })
    }

    render() {
        const Search = Input.Search;
        return (
            <Fragment>
                <Search
                    placeholder="input todo text"
                    enterButton="do"
                    size="large"
                    onSearch={this.handleClick.bind(this)}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                />
                <List
                    renderHeader={() => '任务列表'}
                >
                    {this.state.lists.map((item, index) => {
                        return (
                            <TodoItem
                                key={index}
                                content={item}
                                index={index}
                                delete={this.handleItemDelete.bind(this)}
                            />
                        )
                    })}
                </List>
            </Fragment>
        )
    }
}

export default Lists;