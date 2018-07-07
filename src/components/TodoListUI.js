import React from 'react';
import {Input, Button, List} from 'antd';

const TodoListUI = (props) => {
    return (
        <div style={{width: 960, margin: '0 auto'}}>
            <Input
                placeholder="todo info"
                value={props.inputValue}
                size="large"
                style={{width: 500, margin: '50px 0 0 50px'}}
                onChange={props.handleInputChange}
            />
            <Button
                type="primary"
                size="large"
                onClick={props.handleSubmit}
            >提交</Button>
            <List
                style={{width: 500, margin: '10px 0 0 50px'}}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item
                        onClick={() => {
                            props.handleDelete(index)
                        }}>{item}
                    </List.Item>)}
            />
        </div>
    )
};

export default TodoListUI;