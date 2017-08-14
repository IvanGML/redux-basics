import React from 'react';
import { connect } from 'react-redux';


import  List from '../components/List';
import { deletTodo, toggleTodo, editTodo } from '../actions'

const mapStateToProps = state => ({todos: state})

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => dispatch(deletTodo(id)),
        onToggle: id => dispatch(toggleTodo(id)),
        onEdit: (id, title) => dispatch(editTodo(id, title)),
    }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;