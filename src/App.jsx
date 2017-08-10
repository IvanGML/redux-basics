import React, {Component} from 'react';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import { deletTodo, toggleTodo, editTodo, addTodo } from './actions'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

        this.store = this.props.store;        
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(()=> this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleAdd(title) {
        this.store.dispatch(addTodo(title))
    }

    handleDelete(id) {
        this.store.dispatch(deletTodo(id))
    }

    handleToggle(id) {
        this.store.dispatch(toggleTodo(id))
    }

    handleEdit(id, title) {        
        this.store.dispatch(editTodo(id, title))
    }

    render() {
        const todos = this.store.getState();

        return (
            <main>
                <Header todos={todos} />

                <List
                    todos={todos}
                    onDelete={this.handleDelete}
                    onToggle={this.handleToggle}
                    onEdit={this.handleEdit}
                />

                <Form onAdd={this.handleAdd} />
            </main>
        );
    }
}

App.propTypes = {
    store: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};

export default App;
