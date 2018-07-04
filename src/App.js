import React, {Component, Fragment} from 'react';
import TodoList from './components/todolist';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <TodoList/>
            </Fragment>
        );
    }
}

export default App;
