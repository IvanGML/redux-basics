import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import Form from '../components/Form';

const mapDispatchToProps = dispatch => ({onAdd: title => dispatch(addTodo(title))})

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;