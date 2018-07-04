import React, {Component, Fragment} from 'react';
import {List} from 'antd-mobile';


class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this); //节约性能？
    }

    handleClick() {
        const {index} = this.props;
        this.props.delete(index);   // this.props.
        console.log(index)
    }

    render() {
        const Item = List.Item;
        const {content} = this.props;
        return (
            <Fragment>
                <Item onClick={this.handleClick}>
                    {content}
                </Item>
            </Fragment>
        )
    }
}

export default TodoItem;